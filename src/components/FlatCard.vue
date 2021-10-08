<template>
  <div class="flat-card">
    <div class="title">{{ flat.attributes.title }}</div>
    <div class="sector">
      <span>Комнат:</span>
      <span>{{ flat.attributes.rooms }}</span>
    </div>
    <div class="sector">
      <span>Площадь:</span>
      <span>{{ flat.attributes.area }}&nbsp;{{ flat.attributes.unit }}</span>
    </div>    
    <div class="sector long">   
      <span>Адрес:</span>   
      <span>{{ flat.attributes.address.city }}
      , ул.&nbsp;{{ flat.attributes.address.street }}
      , дом&nbsp;{{ flat.attributes.address.house }}
      , кв&nbsp;{{ flat.attributes.address.room }}
      </span>
    </div> 
    <div class="sector long">
      <span>Контактное лицо:</span>
      <span>
        {{ flat.relationships.attributes.last_name }}
        &nbsp;{{ flat.relationships.attributes.first_name }}
        &nbsp;{{ flat.relationships.attributes.middle_name }}
      </span>
    </div>  

     <div class="like">
        <img 
          v-if="!!flat.like" 
          src="img/likeOk.png"
          @click="$emit('removeLike', flat)"
          title="Снять лайк" />
        <img 
          v-else 
          src="img/like.png" 
          @click="$emit('addLike', flat)"
          title="Поставить лайк" />
    </div>  
  </div>   
</template>

<script>
export default {
  name: 'FlatCard',
  props: {
    flat: {
      type: Object,
      required: true
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .title {
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    padding-right: 50px;
  }

  .flat-card {
    border: solid #ddd thin;
    padding: 1rem;
    margin: 0 2px 15px 0;
    box-shadow: 2px 3px #eee;
    position: relative;
  }

  .sector {
    padding: 0.1rem;
  }

  .sector > span {
    display: table-cell;
  }

  .sector > span:first-child {
    min-width: 8rem;
    padding-right: 10px;
    color: #777;
  }

  .like {
   position: absolute;
    top: 10px;
    right: 10px;
  }

  .like > img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {

    .sector > span:first-child {
      min-width: 5rem;
    }

    .sector.long > span {
      display: block;      
    }
    .sector.long > span:nth-child(2) {
      padding-bottom: 3px;  
    }
}

</style>
