# Mode Set Refactoring Implementation Plan

## Overview
This document outlines the changes needed to refactor how custom mode sets are maintained. The new approach:
- Creates a directory structure under `custom-sets/{modeset_name}-agent/` for each mode set
- Places all mode set files in this directory (Maestro-mode.md and .roomodes)
- Eliminates the use of `-{modeset_name}` suffixes for files

## Files Modified

1. **scripts/generate-mode-sets.js**
   - Updated to create and use the new directory structure 
   - Changed paths to save files in `custom-sets/{modeset_name}-agent/` directory
   - Added transition support code for backward compatibility

2. **scripts/copy_maestro.js**
   - Updated to look for mode set files in the new directory structure
   - Changed paths to look for .roomodes files in `custom-sets/{modeset_name}-agent/`
   - Added backward compatibility for transitional period

3. **ModeSetBuilder-mode.md**
   - Updated instructions and critical processes to reference the new directory structure
   - Added new section "Directory Structure Protocol" to explain the new approach
   - Updated all path references throughout the file
   - Added warnings to prevent using the old file suffix approach

## Implementation Steps

1. Review the updated files:
   - scripts/generate-mode-sets.js.new
   - copy_maestro.js.new
   - ModeSetBuilder-mode.md (already updated)

2. Replace the original files:
   ```bash
   mv scripts/generate-mode-sets.js.new scripts/generate-mode-sets.js
   mv copy_maestro.js.new scripts/copy_maestro.js
   chmod +x scripts/generate-mode-sets.js
   chmod +x scripts/copy_maestro.js
   ```

3. Create initial directory structure:
   ```bash
   # For each existing mode set
   mkdir -p custom-sets/{modeset_name}-agent/
   ```

4. Regenerate all mode sets using the new structure:
   ```bash
   node scripts/generate-mode-sets.js
   ```

5. Test the copy process with one mode set:
   ```bash
   node scripts/copy_maestro.js --mode-set core /path/to/test/directory
   ```

6. Optional: Remove legacy files with mode set suffixes:
   ```bash
   # After confirming everything works
   rm .roomodes-*
   rm custom-sets/Maestro-*.md
   ```

## Backward Compatibility

The updated scripts maintain backward compatibility during the transition period:
- `generate-mode-sets.js` creates files in the new directory structure
- `copy_maestro.js` looks for files in the new directory structure first, then falls back to the old structure if needed
- This ensures a smooth transition while the project adapts to the new structure

## Benefits

1. Better organization of mode set files in dedicated directories
2. Clearer separation between different mode sets
3. Improved maintainability and extensibility
4. Simpler file paths without the need for suffixes
5. More structured approach that can accommodate additional mode set files in the future if needed

## Potential Future Enhancements

1. Add a migration script to automatically convert from the old structure to the new structure
2. Enhance the directory structure to include mode-specific configuration files
3. Add version control for mode sets within their directories
4. Create a mode set visualization tool that uses the directory structure
