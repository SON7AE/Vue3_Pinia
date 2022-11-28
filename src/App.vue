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
        <div v-if="taskStore.loading" class="loading">Loading Tasks...</div>

        <!-- Task List -->
        <div v-if="filter === 'all'" class="task-list">
            <p>Your have {{ taskStore.totalCount }} Tasks left to do</p>
            <div v-for="task in taskStore.tasks" :key="task.title">
                <TaskDetails :task="task" />
            </div>
        </div>
        <div v-if="filter === 'favs'" class="task-list">
            <p>Your have {{ taskStore.favCount }} Tasks left to do</p>
            <div v-for="task in taskStore.favs" :key="task.title">
                <TaskDetails :task="task" />
            </div>
        </div>
    </main>
</template>

<script>
import TaskDetails from '~/components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import { ref } from '@vue/reactivity';
import { useTaskStore } from '~/stores/TaskStore';

export default {
    components: {
        TaskDetails,
        TaskForm,
    },
    setup() {
        const taskStore = useTaskStore();

        // fetch tasks
        taskStore.getTasks();

        const filter = ref('all');

        return { taskStore, filter };
    },
};
</script>

<style></style>
