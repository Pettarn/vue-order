<template>
    <div id="doubleTable">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #doubleTable {
        position: relative;
        display: grid;
        grid-template: repeat(2, 1fr) / repeat(5, 1fr);
        width: 100%;
        height: 150px;
        background-color: #ff0000;
        margin-bottom: 3px;
    }
    #doubleTable>div {
        border: solid
    }
</style>



