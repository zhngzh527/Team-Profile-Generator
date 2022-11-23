const Employee = require("../lib/Employee");

test("creates an employee", () => {
    const e = new Employee("Zzc", "1", "zzc@email.com");

    expect(e.name).toBe("Zzc");
    expect(e.id).toBe("1");
    expect(e.email).toBe("zzc@email.com");

    expect(e.getName()).toBe("Zzc");
    expect(e.getId()).toBe("1");
    expect(e.getEmail()).toBe("zzc@email.com");
    expect(e.getRole()).toBe("Employee");
});