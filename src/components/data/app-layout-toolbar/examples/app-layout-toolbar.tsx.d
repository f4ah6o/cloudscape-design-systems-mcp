import React from "react";
import {
  AppLayoutToolbar,
  BreadcrumbGroup,
  Container,
  Flashbar,
  Header,
  HelpPanel,
  SideNavigation,
  SplitPanel,
} from "@cloudscape-design/components";
import { I18nProvider } from "@cloudscape-design/components/i18n";
import messages from "@cloudscape-design/components/i18n/messages/all.en";
const LOCALE = "en";
export default function AppLayoutToolbarPreview() {
  return (
    <I18nProvider locale={LOCALE} messages={[messages]}>
      {" "}
      <AppLayoutToolbar
        breadcrumbs={
          <BreadcrumbGroup
            items={[
              { text: "Home", href: "#" },
              { text: "Service", href: "#" },
            ]}
          />
        }
        navigationOpen={true}
        navigation={
          <SideNavigation
            header={{ href: "#", text: "Service name" }}
            items={[{ type: "link", text: `Page #1`, href: `#` }]}
          />
        }
        notifications={
          <Flashbar
            items={[
              {
                type: "info",
                content: "This is an info flash message.",
                id: "message_1",
              },
            ]}
          />
        }
        toolsOpen={true}
        tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
        content={
          <Container
            header={
              <Header variant="h2" description="Container description">
                {" "}
                Container header{" "}
              </Header>
            }
          >
            {" "}
            <div className="contentPlaceholder" />{" "}
          </Container>
        }
        splitPanel={
          <SplitPanel header="Split panel header">
            Split panel content
          </SplitPanel>
        }
      />{" "}
    </I18nProvider>
  );
}
