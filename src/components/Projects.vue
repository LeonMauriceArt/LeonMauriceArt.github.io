<script setup>
import ProjectItem from './ProjectItem.vue'
import Cube from './threeJSprojects/Cube.vue'
import Pong from './threeJSprojects/Pong.vue'
import Cursor from './threeJSprojects/Cursor.vue'
import Irc from './threeJSprojects/Irc.vue'
import Inception from './threeJSprojects/Inception.vue'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
    <ProjectItem>
        <template #media-left>
            <Pong/>
        </template>
        <template #heading>Transcendence</template>
        <template #description>
            <p>{{ t('description_transcendence') }}</p>
        </template>
        <template #link><a href="https://github.com/LeonMauriceArt/ft_transcendence">{{ t('link') }}</a></template>
    </ProjectItem>
    <ProjectItem>
        <template #media-right>
            <Cube/>
        </template>
        <template #heading>CUBE_3d</template>
        <template #description>
            <p>{{ t('description_cube3d') }}</p>
        </template>
        <template #link><a href="https://github.com/LeonMauriceArt/Cube_3D">{{ t('link') }}</a></template>
    </ProjectItem>
    <ProjectItem>
        <template #media-left>
            <Irc/>
        </template>
        <template #heading>IRC</template>
        <template #description>
            <p>{{ t('description_irc') }}</p>
        </template>
        <template #link><a href="https://github.com/bkaboa/new_irc">{{ t('link') }}</a></template>
    </ProjectItem>
    <ProjectItem>
        <template #media-right>
            <Inception/>
        </template>
        <template #heading>Inception</template>
        <template #description>
            <p>{{ t('description_inception') }}</p>
        </template>
        <template #link><a href="https://github.com/LeonMauriceArt/inception">{{ t('link') }}</a></template>
    </ProjectItem>
    <ProjectItem>
        <template #media-left>
            <Cursor/>
        </template>
        <template #heading>{{ t('this_website') }}</template>
        <template #description>
            <p>{{ t('description_website') }}</p>
        </template>
    </ProjectItem>
</template>

<style scoped>
p {
    text-align : justify;
    font-family: "Lucida Console", "Courier New", monospace;
}
</style>
