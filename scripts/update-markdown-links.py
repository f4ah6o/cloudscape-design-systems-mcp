#!/usr/bin/env python3
"""
Markdown Link Updater for React Design Systems MCP

This script updates internal links in usage.md files to use the get_link_resource
tool call format instead of regular markdown links. This allows the MCP server
to resolve internal references to components, patterns, and foundation resources.

Usage:
    python scripts/update-markdown-links.py [--dry-run] [--verbose] [file1 file2 ...]

Options:
    --dry-run: Show what would be changed without actually modifying files
    --verbose: Show detailed processing information
    file1 file2 ...: Specific files to process (default: all usage.md files)
"""

import os
import re
import glob
import sys
import argparse
from pathlib import Path

def update_links_in_file(file_path, dry_run=False):
    """Update markdown links in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        print(f"Warning: Could not read {file_path} as UTF-8, skipping")
        return 0
    except IOError as e:
        print(f"Error reading {file_path}: {e}")
        return 0
    
    # Pattern to match internal links starting with /components, /patterns, /foundation, or /examples
    pattern = r'\[([^\]]*)\]\((\/(?:components|patterns|foundation|examples)[^)]*)\)'
    
    # Count matches before replacement
    matches = re.findall(pattern, content)
    original_count = len(matches)
    
    if original_count == 0:
        return 0
    
    # Replace with tool call reference format
    def replace_link(match):
        text = match.group(1)
        url = match.group(2)
        return f'[{text}]({{get_link_resource: {url}}})'
    
    updated_content = re.sub(pattern, replace_link, content)
    
    # Write the updated content back to the file (unless dry run)
    if not dry_run:
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(updated_content)
        except IOError as e:
            print(f"Error writing {file_path}: {e}")
            return 0
    
    return original_count

def main():
    """Main function that handles command line arguments and processing."""
    parser = argparse.ArgumentParser(
        description='Update internal links in usage.md files to use get_link_resource tool calls',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
    # Process all usage.md files
    python scripts/update-markdown-links.py
    
    # Dry run to see what would be changed
    python scripts/update-markdown-links.py --dry-run
    
    # Process specific files
    python scripts/update-markdown-links.py src/components/data/button/usage.md
    
    # Verbose output with dry run
    python scripts/update-markdown-links.py --dry-run --verbose
        """
    )
    
    parser.add_argument(
        '--dry-run', 
        action='store_true',
        help='Show what would be changed without actually modifying files'
    )
    parser.add_argument(
        '--verbose', '-v',
        action='store_true',
        help='Show detailed processing information'
    )
    parser.add_argument(
        'files',
        nargs='*',
        help='Specific files to process (default: all usage.md files in src/components/data/)'
    )
    
    args = parser.parse_args()
    
    # Determine which files to process
    if args.files:
        # Process specific files provided as arguments
        usage_files = []
        for file_pattern in args.files:
            if '*' in file_pattern or '?' in file_pattern:
                # Handle glob patterns
                usage_files.extend(sorted(glob.glob(file_pattern)))
            else:
                # Handle direct file paths
                if os.path.exists(file_pattern):
                    usage_files.append(file_pattern)
                else:
                    print(f"Warning: File not found: {file_pattern}")
    else:
        # Find all usage.md files in component data directories
        pattern = 'src/components/data/*/usage.md'
        usage_files = sorted(glob.glob(pattern))
    
    if not usage_files:
        print("No usage.md files found to process.")
        return 0
    
    # Process files
    mode_str = "DRY RUN - " if args.dry_run else ""
    print(f"{mode_str}Processing {len(usage_files)} usage.md files to replace markdown links with tool call references...")
    print("=" * 80)
    
    files_updated = 0
    total_links_replaced = 0
    
    for file_path in usage_files:
        if args.verbose:
            print(f"Processing: {file_path}")
        
        links_replaced = update_links_in_file(file_path, dry_run=args.dry_run)
        
        if links_replaced > 0:
            files_updated += 1
            total_links_replaced += links_replaced
            status = "Would update" if args.dry_run else "Updated"
            print(f"  ✓ {file_path}: {status} {links_replaced} links")
        elif args.verbose:
            print(f"  - {file_path}: No internal links found")
    
    print("=" * 80)
    print("Summary:")
    print(f"  Files {'that would be ' if args.dry_run else ''}updated: {files_updated}")
    print(f"  Total links {'that would be ' if args.dry_run else ''}replaced: {total_links_replaced}")
    print("=" * 80)
    
    # Show sample of changes (only if not dry run and there were changes)
    if total_links_replaced > 0 and not args.dry_run:
        print("\nSample of changes made:")
        print("-" * 40)
        sample_count = 0
        for file_path in usage_files:
            if sample_count >= 5:
                break
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    lines = content.split('\n')
                    for i, line in enumerate(lines, 1):
                        if '{get_link_resource:' in line:
                            print(f"{file_path}:{i}: {line.strip()}")
                            sample_count += 1
                            if sample_count >= 5:
                                break
            except Exception:
                continue
    
    return 0 if total_links_replaced > 0 or args.dry_run else 1

if __name__ == "__main__":
    main()