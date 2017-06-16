<template>
  <div id="main">
    <ul>
      <li v-for='comment in comments.commentList'>
        {{comment.name}} - {{comment.time}} - {{comment.url}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {comments} from '../utils/mock.js'

  console.log(comments)
  export default {
    data(){
      return {
        comments
      }
    }
  }
</script>