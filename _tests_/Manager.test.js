const Manager = require("../lib/Manager");

test("creates a Manager", () => {
    const m = new Manager("Zzc", "1", "zzc@email.com", "527");

    expect(m.getRole()).toBe("Manager");
});

test("gets office number property", () => {
    const m = new Manager("Zzc", "1", "zzc@email.com", "527");

    expect(m.officeNumber).toBe("527");
});

test("gets office number method", () => {
    const m = new Manager("Zzc", "1", "zzc@email.com", "527");

    expect(m.getOfficeNumber()).toBe("527");
});