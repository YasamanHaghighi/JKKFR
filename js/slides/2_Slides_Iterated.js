// THE TRUST GAME - COOPERATE, YA NO?
SLIDES.push({

	id: "oneoff2",

	onstart: function(self){

		Tournament.resetGlobalVariables();

		// Iterated Simulation
		self.add({id:"iterated", type:"Iterated", x:130, y:133});

		// Words on top & bottom
		self.add({
			id:"topWords", type:"TextBox", text_id:"oneoff2_0_top",
			x:130, y:10, width:700, height:100, align:"center"
		});
		self.add({
			id:"btmWords", type:"TextBox", text_id:"oneoff2_0_btm",
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
			id:"btnCheat", type:"Button", x:160, y:463, text_id:"label_2_cheat", uppercase:true,
			onclick:function(){
				_.answer = "CORRECT";
				publish("slideshow/customizedNext");
			}
		});
		self.add({
			id:"btnCooperate", type:"Button", x:380, y:460, text_id:"label_2_cooperate", uppercase:true,
			onclick:function(){
				_.answer = "COOPERATE";
				publish("slideshow/customizedNext");
			}
		});
		self.add({
			id:"btnJossie", type:"Button", x:600, y:460, text_id:"label_2_jossie", uppercase:true,
			onclick:function(){
				_.answer = "CHEAT";
				publish("slideshow/customizedNext");
			}
		});

		self.add({
			id:"btnNew", type:"Button", x:790, y:320, text_id:"label_2_workelement", uppercase:true, tooltip: "who_element",
	});

		jQuery('.label').eq(0).text('Tâche individuelle');
		jQuery('.label').eq(0).css('font-weight', 'bold');
		jQuery('.label').eq(1).text('1. Préparer la pâte');
		jQuery('.label').eq(2).text('2. Ajouter des brisures de')
		jQuery('.label').eq(3).text('chocolat et des noix')
		jQuery('.label').eq(4).text('3. Placer la pâte sur')
		jQuery('.label').eq(5).text('une feuille de cuisson')
		jQuery('.label').eq(6).text('4. Préparer le four')
		jQuery('.label').eq(7).text('5. Faire cuire les biscuits')
	},
	onend: function(self){
		//self.remove("labelYou");
		//self.remove("labelThem");
		//jQuery('.label').eq(0).text('nooooooo');
		//jQuery('.label').eq(1).text('yeeeeees');
		console.log('flag 1 - onend');
		selectedAnswer = "oneoff2-" + _.answer;
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
			t.setText(Words.get("oneoff2_1_cooperated")+"<br>"+Words.get("oneoff2_1_top"));
		}else{
			t.setText(Words.get("oneoff2_1_cheated")+"<br>"+Words.get("oneoff2_1_top"));
		}
		b.setTextID("oneoff2_1_btm");

		// Hide & fade
		_hide(o.topWords); _fadeIn(o.topWords, 150+10);
		_hide(o.btmWords); _fadeIn(o.btmWords, 150+600);
		_hide(o.btnCheat); _fadeIn(o.btnCheat, 150+1200);
		_hide(o.btnCooperate); _fadeIn(o.btnCooperate, 150+1200);
		_hide(o.btnJossie); _fadeIn(o.btnJossie, 150+1200);

	},
	onend: function(self){
		//self.remove("btmWords");
		selectedAnswer = "oneoff2-" + _.answer;
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
			t.setText(Words.get("oneoff2_2_cooperated")+"<br>"+Words.get("oneoff2_2_top"));
		}else{
			t.setText(Words.get("oneoff2_2_cheated")+"<br>"+Words.get("oneoff2_2_top"));
		}
		self.add({
			id:"btmWords", type:"TextBox", text_id:"oneoff2_2_btm",
			x:130, y:392, width:700, height:100, align:"center"
		});

		// Replace button
		self.remove("btnCheat");
		self.remove("btnCooperate");
		self.remove("btnJossie");
		self.add({
			id:"btnNext", type:"Button", x:304, y:481, size:"long",
			text_id:"oneoff2_button_next",
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
		//_.clear();
		self.clear();
	}

});
