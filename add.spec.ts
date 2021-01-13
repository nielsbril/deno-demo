import { assertEquals, assertNotEquals } from 'https://deno.land/std@0.83.0/testing/asserts.ts';

import { add } from './add.ts';

Deno.test("Add", () => {
    assertEquals(add(1, 2), 3, "1 + 2 = 3");
    assertNotEquals(add(1, 2), 3, "1 + 2 != 4");
});