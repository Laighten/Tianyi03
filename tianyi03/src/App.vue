<template>
  <div >
    <!-- <div> <h2 class="h2">天翼三期 <small>前端界面</small> </h2></div> -->
    <div id="app">
        <div class="logo">
            <h3 class=h3><a href="#">Select <strong>DashBoard</strong></a></h3>
        </div>
       <nav id="sidebar" class="sidebar nav-collapse collapse">
            <ul id="side-nav" class="side-nav">
              <li class="active">
                    <router-link to="/pageOne">
                    <i class="fa fa-home"></i> <span class="name" >网站首页 </span><small>总体概览</small>
                    </router-link>
              </li>
              <li class="active">
                    <router-link to="/pageTwo">
                    <i class="fa fa-comment"></i> <span class="name">敏感文字 </span><small>详细展示</small>
                    </router-link>
              </li>
               <li class="active">
                    <router-link to="/pageThree">
                    <i class="fa fa-picture-o"></i> <span class="name">敏感图片 </span><small>详细展示</small>
                    </router-link>
              </li>
               <li class="active">
                    <router-link to="/pageFour">
                    <i class="fa fa-film"></i> <span class="name">敏感视频 </span><small>详细展示</small>
                    </router-link>
              </li>
             
            </ul>
      </nav> 
      <div class="wrap">
          <header class="page-header">
            <form id="search-form" class="navbar-form pull-right" role="search">
                <input type="search" class="form-control search-query" placeholder="Search...">
            </form>
            <div class="notifications pull-right">
                <div class="alert pull-right">
                    <a href="#" class="close ml-xs" data-dismiss="alert">&times;</a>
                    <i class="fa fa-info-circle mr-xs"></i> Check out Light Blue <a id="notification-link" href="#">settings</a> on the right!
                </div>
            </div> 
                 
            <div class="navbar">
                <h2 class=" h2">天翼三期 <small>前端界面</small></h2>        
            </div>
        </header>  
        <div class="content container">
            <div class="row">
                
            </div>
        </div>
        
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import pageOne from './page/pageOne'
import pageTwo from './page/pageTwo'
import pageThree from './page/pageThree'
import pageFour from './page/pageFour'


export default {
  name: 'App',
  components: {
    pageOne,
    pageTwo,
    pageThree,
    pageFour,
 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0%;
}
.h2{
  font-size: 30px;
  color: white;
  text-align: center;
  margin-top: 0%;
}
.h3{
  font-size: 20px;
  color: white;
  margin-top: 5%;
}
</style>
