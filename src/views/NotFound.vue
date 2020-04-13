<template>
  <b-container class="container">
		<b-row>
			<b-col>
				<h1>404</h1>
			</b-col>
		</b-row>
    <b-row>
			<b-col>
      <h2>Oops! This Page Could Not Be Found</h2>
			<p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
			</b-col>
		</b-row>
		<b-row>
			<b-col class="text-center">
			<router-link to="/"><Button :btn="btn" /></router-link>	
			</b-col>
		</b-row>
  </b-container>
</template>
<script>
export default {
	name: 'NotFound',
  data() {
  	return {
  		 btn: 'go to homepage'
  	}
  }
};
</script>
<style scoped>
h1 {
	margin-top: 80px;
	text-align: center;
	font-size: 300px;
	color: #2ecc71;
}
h2,p {
	text-align: center;
	color: gray;
}
.btn {
	text-transform: uppercase;
}
</style>