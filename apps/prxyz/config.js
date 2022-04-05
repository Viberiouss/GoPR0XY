window.apps["prxyz"] = {};
window.apps["prxyz"]["tile"] = `<div class="box_widget">
	<div>
		<h3>URL Iframing</h3>
	</div>
	<div>
		<ul class="list">
			<li><input id="pyz_url" placeholder="full url"></li>
			<li><button class="btn_primary" id="str_pyz">load</button></li>
			<li>Bunker no longer comes preloaded with pr&zwj;oxy links</li>
		</ul>
	</div>
	<script>
		document.getElementById("str_pyz").addEventListener("click", function(){
			goInternal("/apps/prxyz/get.html?id="+document.getElementById("pyz_url").value);
		});
	</script>
</div>`;