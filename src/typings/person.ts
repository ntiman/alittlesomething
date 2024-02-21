export interface Person {
  email?: string;
  name?: string;
}

withDefaults(defineProps<Person>(), {
  email: "test",
  name: "test_name",
});
