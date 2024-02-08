export interface Person {
    email?: string,
    image?: string,
    name?: string,
}

withDefaults(defineProps<Person>(), {
    email: "test",
    image: "123",
    name: "test_name"
})
    
