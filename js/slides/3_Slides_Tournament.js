// THE TRUST GAME - COOPERATE, YA NO?
SLIDES.push({

	id: "oneoff3",

	onstart: function(self){

		Tournament.resetGlobalVariables();

		// Iterated Simulation
		self.add({id:"iterated", type:"Iterated", x:130, y:133});

		// Words on top & bottom
		self.add({
			id:"topWords", type:"TextBox", text_id:"oneoff3_0_top",
			x:130, y:10, width:700, height:100, align:"center"
		});
		self.add({
			id:"btmWords", type:"TextBox", text_id:"oneoff3_0_btm",
			x:130, y:397, width:700, height:100, align:"center"
		});

		// Labels
		self.add({
			id:"labelYou", type:"TextBox",
			x:211, y:201, width:50, height:50,
			align:"center", color:"#aaa", size:17,
			text_id:"label_you"
		});
		self.add({
			id:"labelThem", type:"TextBox",
			x:702, y:189, width:50, height:50,
			align:"center", color:"#aaa", size:17,
			text_id:"label_them"
		});

		// Buttons
		self.add({
			id:"btnCheat", type:"Button", x:160, y:463, text_id:"label_3_cheat", uppercase:true,
			onclick:function(){
				_.answer = "CORRECT";
				publish("slideshow/customizedNext");
			}
		});
		self.add({
			id:"btnCooperate", type:"Button", x:380, y:460, text_id:"label_3_cooperate", uppercase:true,
			onclick:function(){
				_.answer = "COOPERATE";
				publish("slideshow/customizedNext");
			}
		});
		self.add({
			id:"btnJossie", type:"Button", x:600, y:460, text_id:"label_3_jossie", uppercase:true,
			onclick:function(){
				_.answer = "CHEAT";
				publish("slideshow/customizedNext");
			}
		});

		self.add({
			id:"btnNew", type:"Button", x:790, y:320, text_id:"label_3_workelement", uppercase:true, tooltip: "who_element2",
	});
	self.add({
		id:"btnNew2", type:"Button", x:800, y:270, text_id:"label_3_nece", uppercase:true, tooltip: "who_nece",
});

		jQuery('.label').eq(0).text('Conditions nécessaires pour la cuisson:');
		jQuery('.label').eq(0).css('font-weight', 'bold',);
		jQuery('.label').eq(1).text('Info: temps de cuisson,');
		jQuery('.label').eq(2).text('température du four');
		jQuery('.label').eq(3).text('Outils et méthodes: four,')
		jQuery('.label').eq(4).text('minuterie, feuille de cuisson,')
		jQuery('.label').eq(5).text('mitaines, directives de cuisson')
		jQuery('.label').eq(6).text('Capacité: formation en')
		jQuery('.label').eq(7).text('sécurité, être apte à mesurer')
	},
	onend: function(self){
		//self.remove("labelYou");
		//self.remove("labelThem");
		selectedAnswer = "oneoff3-" + _.answer;
	}

},{

	onstart: function(self){

		var o = self.objects;

		// Payoff
		/// o.iterated.oneoffHighlight1(_.answer);

		// Text
		var t = o.topWords;
		var b = o.btmWords;
		if(_.answer=="COOPERATE" || _.answer=="CHEAT"){
			t.setText(Words.get("oneoff3_1_cooperated")+"<br>"+Words.get("oneoff3_1_top"));
		}else{
			t.setText(Words.get("oneoff3_1_cheated")+"<br>"+Words.get("oneoff3_1_top"));
		}
		b.setTextID("oneoff3_1_btm");

		// Hide & fade
		_hide(o.topWords); _fadeIn(o.topWords, 150+10);
		_hide(o.btmWords); _fadeIn(o.btmWords, 150+600);
		_hide(o.btnCheat); _fadeIn(o.btnCheat, 150+1200);
		_hide(o.btnCooperate); _fadeIn(o.btnCooperate, 150+1200);
		_hide(o.btnJossie); _fadeIn(o.btnJossie, 150+1200);

	},
	onend: function(self){
		selectedAnswer = "oneoff3-" + _.answer;
		//self.remove("btmWords");
	}

},{

	onstart: function(self){
		self.remove("btmWords");
		var o = self.objects;

		// Payoff
		/// o.iterated.oneoffHighlight2(_.answer);

		// Text
		var t = o.topWords;
		if(_.answer=="COOPERATE" || _.answer=="CHEAT"){
			t.setText(Words.get("oneoff3_2_cooperated")+"<br>"+Words.get("oneoff3_2_top"));
		}else{
			t.setText(Words.get("oneoff3_2_cheated")+"<br>"+Words.get("oneoff3_2_top"));
		}
		self.add({
			id:"btmWords", type:"TextBox", text_id:"oneoff3_2_btm",
			x:130, y:392, width:700, height:100, align:"center"
		});

		// Replace button
		self.remove("btnCheat");
		self.remove("btnCooperate");
		self.remove("btnJossie");
		self.add({
			id:"btnNext", type:"Button", x:304, y:481, size:"long",
			text_id:"oneoff3_button_next",
			message:"slideshow/next"
		});

		// Hide & fade
		_hide(o.topWords); _fadeIn(o.topWords, 150+10);
		_hide(o.btmWords); _fadeIn(o.btmWords, 150+600);
		_hide(o.btnNext); _fadeIn(o.btnNext, 150+1200);

	},

	onend: function(self){
		selectedAnswer = 'Heeeeeeeeeee';
		///self.objects.iterated.dehighlightPayoff();
		self.remove("topWords");
		self.remove("btmWords");
		self.remove("btnNext");
		self.remove("btnNew");
		self.remove("btnNew2");
		//_.clear();
		self.clear();
	}

});
