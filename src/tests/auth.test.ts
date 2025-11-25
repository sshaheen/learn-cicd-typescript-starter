import { expect, test } from "vitest";
import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "../api/auth";

test("No headers provided", () => {
  const headers: IncomingHttpHeaders = {};
  expect(getAPIKey(headers)).toBe(null);
});

test("Authorization header provided", () => {
  const headers: IncomingHttpHeaders = {
    authorization: "ApiKey TESTKEY",
  };
  expect(getAPIKey(headers)).toBe("TESTKEY");
});
