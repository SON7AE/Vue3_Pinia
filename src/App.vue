<template>
    <main>
        <!-- Heading -->
        <header>
            <img src="src/assets/pinia-logo.svg" alt="pinia logo" />
            <h1>Pinia Tasks</h1>
        </header>

        <!-- New Task Form -->
        <div class="new-task-form">
            <TaskForm />
        </div>

        <!-- Filter -->
        <nav class="filter">
            <button @click="filter = 'all'">All Tasks</button>
            <button @click="filter = 'favs'">Fav Tasks</button>
        </nav>

        <!-- Loading -->
        <div v-if="loading" class="loading">Loading Tasks...</div>

        <!-- Task List -->
        <div v-if="filter === 'all'" class="task-list">
            <p>Your have {{ totalCount }} Tasks left to do</p>
            <div v-for="task in tasks" :key="task.id">
                <TaskDetails :task="task" />
            </div>
        </div>
        <div v-if="filter === 'favs'" class="task-list">
            <p>Your have {{ favCount }} favs left to do</p>
            <div v-for="task in favs" :key="task.id">
                <TaskDetails :task="task" />
            </div>
        </div>

        <button @click="taskStore.$reset">Reset State</button>
    </main>
</template>

<script>
import TaskDetails from '~/components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';

import { storeToRefs } from 'pinia';
import { ref } from '@vue/reactivity';
import { useTaskStore } from '~/stores/TaskStore';

export default {
    components: {
        TaskDetails,
        TaskForm,
    },
    setup() {
        const taskStore = useTaskStore();
        const { tasks, loading, favs, totalCount, favCount } = storeToRefs(taskStore);

        // fetch tasks
        taskStore.getTasks();

        const filter = ref('all');

        return { taskStore, filter, tasks, loading, favs, totalCount, favCount };
    },
};
</script>

<style></style>
