# Type Narrowing in TypeScript: Using Type Guards

In TypeScript, a variable can have more than one possible type. For example, a variable might be either a "string" or a "number". This causes trouble when we want to use a method that only exists on one of those types.

Suppose we want to find the length of a value, but the value might be a number. Numbers don't have a length, so TypeScript will show an error.

To solve this, we use type guards. A type guard is a check that helps us find out the specific type of a variable. TypeScript understands the check and narrows the type to something more specific inside that block of code. This is called type narrowing. Once the type is narrowed, we can safely use the methods and properties that belong to it.

## Types of Type Guards

### 1. typeof

typeof is used to find the type of a primitive value such as string, number, or boolean.

```
function formatPrice(price: string | number) {
  if (typeof price === "number") {
    return price.toFixed(2);
  }
  return price.trim();
}
```

Inside the if block, TypeScript knows "price" is a number, so ".toFixed()" is allowed. Outside it, TypeScript knows "price" must be a string, so ".trim()" is allowed.

### 2. instanceof

instanceof checks whether an object is an instance of a specific class.

```
function showDate(value: Date | string) {
  if (value instanceof Date) {
    return value.getFullYear();
  }
  return value.toUpperCase();
}
```

Because value is an instance of the "Date" class, we can use Date methods like ".getFullYear()".

### 3. in

The in operator checks whether a property exists inside an object. This is useful when two object types have different properties.

```
type Admin = { name: string; permissions: string[] };
type Guest = { name: string; visitCount: number };

function describeUser(user: Admin | Guest) {
  if ("permissions" in user) {
    return user.permissions.length;
  }
  return user.visitCount;
}
```

Only Admin has the "permissions" property, so if it exists, TypeScript treats the object as an Admin.

## Other Ways to Narrow Types

Besides these three, there are other techniques too, such as **truthiness checks** and **user-defined type guards**.

## Conclusion

A variable can have a wide type, but TypeScript only lets us use what is safe for every possible type. By using type guards like typeof, instanceof, and in, we narrow the type to something specific, so we can use the right methods with confidence and catch mistakes before the code runs.
