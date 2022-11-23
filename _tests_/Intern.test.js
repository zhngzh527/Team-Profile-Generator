const Intern = require("../lib/Intern");

test("creates an Intern", () => {
    const i = new Intern("Zzc", "1", "zzc@email.com", "KU");

    expect(i.getRole()).toBe("Intern");
});

test("gets school property", () => {
    const i = new Intern("Zzc", "1", "zzc@email.com", "KU");

    expect(i.school).toBe("KU");
});

test("gets school method", () => {
    const i = new Intern("Zzc", "1", "zzc@email.com", "KU");

    expect(i.getSchool()).toBe("KU");
});