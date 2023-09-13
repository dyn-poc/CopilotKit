import {
  ChatlikeApiEndpoint,
  CopilotTextarea,
} from "@copilotkit/react-textarea";
import { useState } from "react";

export function VacationNotes(): JSX.Element {
  const [text, setText] = useState("");

  return (
    <>
      <CopilotTextarea
        className="px-4 py-4"
        value={text}
        onValueChange={(value: string) => setText(value)}
        placeholder="What are your plans for your vacation?"
        autosuggestionsConfig={{
          textareaPurpose:
            "Travel notes from the user's previous vacations. Likely written in a colloquial style, but adjust as needed.",
          debounceTime: 700,
          acceptAutosuggestionKey: "Tab",
          externalContextCategories: [],
          disableWhenEmpty: true,
          chatApiConfigs: {
            suggestionsApiConfig: {
              apiEndpoint: ChatlikeApiEndpoint.standardOpenAIEndpoint(
                "/api/copilotkit_chatlike"
              ),
              forwardedParams: {
                max_tokens: 20,
                stop: [".", "?", "!"],
              },
            },
            insertionApiConfig: {
              apiEndpoint: ChatlikeApiEndpoint.standardOpenAIEndpoint(
                "/api/copilotkit_chatlike"
              ),
            },
          },
        }}
      />
    </>
  );
}
