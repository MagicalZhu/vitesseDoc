<!--
  show blogs component: 博客列表的 layout
-->
<template>
  <main class="flex flex-col min-h-full text-c" p="x-4 t-24 b-6">
    <div class="flex-1 mb-6">
      <Navbar>
        <slot name="navbar"/>
      </Navbar>
      <router-view/>
    </div>
    <Footer />
  </main>
</template>