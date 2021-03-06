// THE TRUST GAME - COOPERATE, YA NO?
SLIDES.push({

	id: "oneoff",

	onstart: function(self){
		console.log('flag 1 - onstart');
		Tournament.resetGlobalVariables();

		// Iterated Simulation
		self.add({id:"iterated", type:"Iterated", x:130, y:133});

		// Words on top & bottom
		self.add({
			id:"topWords", type:"TextBox", text_id:"oneoff_0_top",
			x:130, y:10, width:700, height:100, align:"center"
		});
		self.add({
			id:"btmWords", type:"TextBox", text_id:"oneoff_0_btm",
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
			id:"btnCheat", type:"Button", x:160, y:463, text_id:"label_1_cheat", uppercase:true,
			onclick:function(){
				_.answer = "CHEAT";
				publish("slideshow/customizedNext");
			}
		});
		self.add({
			id:"btnCooperate", type:"Button", x:380, y:460, text_id:"label_1_cooperate", uppercase:true,
			onclick:function(){
				_.answer = "COOPERATE";
				publish("slideshow/customizedNext");
			}
		});
		self.add({
			id:"btnJossie", type:"Button", x:600, y:460, text_id:"label_1_jossie", uppercase:true,
			onclick:function(){
				_.answer = "CORRECT";
				publish("slideshow/customizedNext");
	}
	});

	self.add({
		id:"btnNew", type:"Button", x:790, y:320, text_id:"label_1_recipe", uppercase:true, tooltip: "who_tft",
});

		jQuery('.label').eq(0).text('Attentes de Mr. Kemp relatives à ses biscuits:');
		jQuery('.label').eq(0).css('font-weight', 'bold');
		jQuery('.label').eq(1).text('1. Utiliser du beurre non');
		jQuery('.label').eq(2).text('salé uniquement');
		jQuery('.label').eq(3).text('2. Utiliser des brisures de chocolat noir');
	},
	onend: function(self){
		//self.remove("labelYou");
		//self.remove("labelThem");
		console.log('flag 1 - onend');
		selectedAnswer = _.answer;
	}

},{
	onstart: function(self){

			var o = self.objects;
			console.log('flag 2 - onstart');
			//console.log('self is: '+self);
			//console.log('_.answer is: '+_.answer);
			// Payoff
			/// o.iterated.oneoffHighlight1(_.answer);

			// Text
			var t = o.topWords;
			var b = o.btmWords;
			if(_.answer=="COOPERATE" || _.answer=="CHEAT") { // wrong answer
				t.setText(Words.get("oneoff_1_cooperated")+"<br>"+Words.get("oneoff_1_top"));
				console.log('t is: '+t);
			} else { // correct answer
				t.setText(Words.get("oneoff_1_cheated")+"<br>");
				console.log('t is: '+t);
			}
			b.setTextID("oneoff_1_btm");

			//selectedAnswer = _.answer;

			// Hide & fade
			_hide(o.topWords); _fadeIn(o.topWords, 150+10);
			_hide(o.btmWords); _fadeIn(o.btmWords, 150+600);
			_hide(o.btnCheat); _fadeIn(o.btnCheat, 150+1200);
			_hide(o.btnCooperate); _fadeIn(o.btnCooperate, 150+1200);
			_hide(o.btnJossie); _fadeIn(o.btnJossie, 150+1200);



	},
	onend: function(self) {
		console.log('flag 2 - onend');
		selectedAnswer = _.answer;
		//console.log('_.answer is: '+_.answer);
		//self.remove("btmWords");
	}

},{

	onstart: function(self){
		console.log('flag 3 - onstart');
		self.remove("btmWords");
		var o = self.objects;

		// Payoff
		///o.iterated.oneoffHighlight2(_.answer);

		// Text
		var t = o.topWords;
		if(_.answer=="COOPERATE" || _.answer=="CHEAT"){
			t.setText(Words.get("oneoff_2_cooperated")+"<br>"+Words.get("oneoff_2_top"));
		}else{
			t.setText(Words.get("oneoff_2_cheated")+"<br>"+Words.get("oneoff_2_top"));
		}
		self.add({
			id:"btmWords", type:"TextBox", text_id:"oneoff_2_btm",
			x:130, y:392, width:700, height:100, align:"center"
		});

		// Replace button
		self.remove("btnCheat");
		self.remove("btnCooperate");
		self.remove("btnJossie");



		self.add({
			id:"btnNext", type:"Button", x:304, y:481, size:"long",
			text_id:"oneoff_button_next",
			message:"slideshow/next"
		});

		// Hide & fade
		_hide(o.topWords); _fadeIn(o.topWords, 150+10);
		_hide(o.btmWords); _fadeIn(o.btmWords, 150+600);
		_hide(o.btnNext); _fadeIn(o.btnNext, 150+1200);

	},

	onend: function(self){
		console.log('flag 3 - onend');
		selectedAnswer = 'Heeeeeeeeeee';
		///self.objects.iterated.dehighlightPayoff();
		self.remove("topWords");
		self.remove("btmWords");
		self.remove("btnNext");
		self.remove("btnNew");
		//_.clear();
		self.clear();
	}

});
