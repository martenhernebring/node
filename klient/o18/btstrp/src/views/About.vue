<template>
    <div class="dropdown">
        <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><p class="dropdown-item" @click="cnsl">Action</p></li>
            <li><p class="dropdown-item" @click="cnsl">Another action</p></li>
            <li><p class="dropdown-item" @click="cnsl">Something else here</p></li>
        </ul>
    </div>
    <!--div class="btn-toolbar">
        <a href="#" class="btn btn-secondary"> Branch: main </a>
        <a href="#"> 2 branches </a>
        <a href="#"> 4 tags </a>
        <a href="#" class="btn btn-secondary">Go to file</a>
        <a href="#" class="btn btn-secondary">Add file</a>
        <a href="#" class="btn btn-primary">Code</a>
    </div-->
</template>
<script>
/*@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';*/

export default {
    methods: {
        cnsl(evt) {
            console.log(evt.target.innerText)
        },
    },
}
</script>
