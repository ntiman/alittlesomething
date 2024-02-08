export interface Person {
    email?: string,
    image?: string,
    name?: string,
}

withDefaults(defineProps<Person>(), {
    email: "test",
    image: "",
    name: "test_name"
})
    
