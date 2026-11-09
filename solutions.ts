function multiplyValue (value: number, multiplier?: number): number {
    if(multiplier!== undefined) {
        return value * multiplier;
    }
    return value * 2;
}

function processInput(value: string | number | boolean): string | number {
    if (typeof value === 'string') {
        return value.trim().toLowerCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else {
        return value? "Active" : "Inactive"; 
    }
}

function formatCoordinate (coordinate: readonly [latitude: number, longitude: number, locationName: string]): string {
    const [latitude, longitude, locationName] = coordinate;
        return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...array: T[][]): T[] {
    return [...array.flat()]
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(Courses: Course[], minStudents: number): Course[] {
    return Courses.filter(course => course.isPublished && course.students >= minStudents);
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    return items.map(item => item[key]);
}

class Employee {
    protected name: string;
    private baseSalary: number;
    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;
    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }   
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

async function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
}


