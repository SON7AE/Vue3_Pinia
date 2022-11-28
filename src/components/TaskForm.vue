<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="newTask" type="text" placeholder="I need to..." />
        <button>Add</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useTaskStore } from '~/stores/TaskStore';

export default {
    setup() {
        const taskStore = useTaskStore();
        const newTask = ref('');
        const handleSubmit = () => {
            if (newTask.value.length > 0) {
                taskStore.addTask({
                    id: Math.floor(Math.random() * 10000),
                    title: newTask.value,
                    isFav: false,
                });
                newTask.value = '';
            }
        };

        return { handleSubmit, newTask };
    },
};
</script>

<style></style>
