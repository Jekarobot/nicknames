import validator from "../nicknames";

test("validate correct username", () => {
    expect(new validator("R0man").validateUsername()).toBe(true);
})

test("validate correct username with only alphanumeric characters", () => {
    expect(new validator("Roman").validateUsername()).toBe(true);
});

test("validate incorrect username with spaces", () => {
    expect(new validator("Ro man").validateUsername()).toBe(false);
})

test("validate incorrect username with numbers", () => {
    expect(new validator("R0123man").validateUsername()).toBe(false);
})

test("validate incorrect username with special characters at the end", () => {
    expect(new validator("R0man_").validateUsername()).toBe(false);
})

test("validate incorrect username with special characters at the beginning", () => {
    expect(new validator("_R0man").validateUsername()).toBe(false);
})

test("validate correct username with special characters in the middle", () => {
    expect(new validator("R0ma-n").validateUsername()).toBe(true);
})

test("validate incorrect username starting with a number", () => {
    expect(new validator("1R0man").validateUsername()).toBe(false);
});

test("validate incorrect username ending with a number", () => {
    expect(new validator("R0man1").validateUsername()).toBe(false);
});

test("validate incorrect username with special characters", () => {
    expect(new validator("R0m@n").validateUsername()).toBe(false);
});

test("validate incorrect empty username", () => {
    expect(new validator("").validateUsername()).toBe(false);
});