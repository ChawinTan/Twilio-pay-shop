import { subscribeProduct } from "../Actions/SubscribeActions";

test("it should return respective action object", () => {
  const expectedObject = { type: "test", payload: false };
  const testAction = subscribeProduct("test", false);

  expect(testAction).toEqual(expectedObject);
});
