<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar title="Left Panel"></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-block inner>
              <p>Left panel content goes here</p>
            </f7-block>
            <f7-block-title>Load page in panel</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
            </f7-list>
            <f7-block-title>Load page in main view</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Right Panel -->
    <f7-panel right cover layout="dark">
      <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar title="Right Panel" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-block>
              <p>Right panel content goes here</p>
            </f7-block>
            <f7-block-title>Load page in panel</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
            </f7-list>
            <f7-block-title>Load page in main view</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- Navbar -->
        <f7-navbar>
          <f7-nav-left>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>T.I.L.D.E.</f7-nav-center>
          <f7-nav-right>
            <f7-link icon="icon-bars" open-panel="right"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>
            <f7-page>

		    <f7-block-title><h3 style="text-align: center"><em>T</em>hings <em>I</em>'d <em>L</em>ike <em>D</em>one <br><img src="../static/tilde.png" style="height: 40px; width: 40px"><br><em>E</em>ventually</h3></f7-block-title>

              <f7-block>
		  
              <f7-grid>
                  <f7-col width="50">
		      <div class="nav-card" style="text-align: center">
			  <f7-card style="">
			      <f7-card-header >Habits</f7-card-header>
			      <f7-card-content link="/habits/" ><icon name="bath" scale="7"></icon></f7-card-content>
			      <f7-card-footer>last update: </f7-card-footer>				
			  </f7-card>			    
		      </div>
                  </F7-col>
                  <f7-col width="50">
		      <div class="nav-card"  style="text-align: center">
			  <f7-card>
			      <f7-card-header>Goals</f7-card-header>
			      <f7-card-content link="/goals/" ><icon name="bullseye" scale="7"></icon></f7-card-content>
			      <f7-card-footer>last update: </f7-card-footer>				
			  </f7-card>			    
		      </div>
                  </f7-col>
              </f7-grid>
            </f7-block>	   
            <f7-block>
		<f7-grid>
                    <f7-col width="50">
			<div class="nav-card"  style="text-align: center">
			    <f7-card>
				<f7-card-header>Skills</f7-card-header>
				<f7-card-content link="/skills/" ><icon name="superpowers" scale="7"></icon></f7-card-content>
				<f7-card-footer>last update: </f7-card-footer>				
			    </f7-card>			    
			</div>
                    </F7-col>
                    <f7-col width="50">
			<div class="nav-card"  style="text-align: center">
			    <f7-card>
				<f7-card-header>Journal</f7-card-header>
				<f7-card-content link="/journal/"><icon name="pencil" scale="7"></icon></f7-card-content>
				<f7-card-footer>last update: </f7-card-footer>				
			    </f7-card>			    
			</div>
                    </f7-col>
		</f7-grid>
            </f7-block>
	    
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

    <!-- Popup -->
    <f7-popup id="popup">
      <f7-view navbar-fixed>
        <f7-pages>
          <f7-page>
            <f7-navbar title="Popup">
              <f7-nav-right>
                <f7-link close-popup>Close</f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-popup>

    <!-- Login Screen -->
    <f7-login-screen id="login-screen">
      <f7-view>
        <f7-pages>
          <f7-page login-screen>
            <f7-login-screen-title>Login</f7-login-screen-title>
            <f7-list form>
              <f7-list-item>
                <f7-label>Username</f7-label>
                <f7-input name="username" placeholder="Username" type="text"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Password</f7-label>
                <f7-input name="password" type="password" placeholder="Password"></f7-input>
              </f7-list-item>
            </f7-list>
            <f7-list>
              <f7-list-button title="Sign In" close-login-screen></f7-list-button>
              <f7-list-label>
                <p>Click Sign In to close Login Screen</p>
              </f7-list-label>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-login-screen>

  </div>
</template>

<script>
 import Icon from 'vue-awesome/components/Icon'

 export default {
     components: {
	 Icon
     }
 }
</script>

<style>

 h3 {
     font-style: Palanquin;
 }
 .card-header {
     font-family: Palanquin;
 }
 em {
     color: rgb(220, 0, 0);
     font-style: normal;
     font-size: 18px;
 }
</style>
