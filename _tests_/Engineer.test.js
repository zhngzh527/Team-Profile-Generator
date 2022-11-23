const Engineer = require("../lib/Engineer");

test("creates an Engineer", () => {
    const e = new Engineer("Zzc", "1", "zzc@email.com", "zhngzh527");

    expect(e.getRole()).toBe("Engineer");
});

test("github property", () => {
    const e = new Engineer("Zzc", "1", "zzc@email.com", "zhngzh527");

    expect(e.github).toBe("zhngzh527");
});

test("github method", () => {
    const e = new Engineer("Zzc", "1", "zzc@email.com", "zhngzh527");

    expect(e.getGithub()).toBe("<a href=\"https://github.com/zhngzh527\" target=\"_blank\" rel=\"noopener noreferrer\">zhngzh527</a>");
});