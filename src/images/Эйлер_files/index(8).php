/**
 * Caixa com abas, feitas com a [[Template:Tabs]]
 * @source: [[:w:fr:MediaWiki:Common.js]] (traduzido de [[:w:ca:MediaWiki:Common.js]])
 * @author: [[:w:ca:User:Peleguer]]
 * @author: [[:w:ca:User:Joanjoc]]
 * @author: [[:w:fr:User:Antaya]] (adaptação)
 * @author: [[:w:pt:Rei-artur]] (adaptação)
 */
/*global mw, $ */
function CadreOngletInit() {
	var i = 0;
	for (i = 0; i <= 9; i++) {
		var	vMb,
			vBt,
			j,
			vOgIni = 0;
		vMb = document.getElementById( 'mb' + i);
		if ( !vMb ) {
			break;
		}
		for ( j = 1; j <= 9; j++ ) {
			vBt = document.getElementById( 'mb' + i + 'bt' + j );
			if ( !vBt ) {
				break;
			}
			vBt.onclick = CadreOngletVoirOnglet;
			if (vBt.className === 'mbButtonSel' ) {
				vOgIni = j;
			}
		}
		if (vOgIni === 0) {
			vOgIni = 1 + Math.floor((j - 1) * Math.random());
			document.getElementById( 'mb' + i + 'og' + vOgIni).style.display = 'block';
			document.getElementById( 'mb' + i + 'og' + vOgIni).style.visibility = 'visible';
			document.getElementById( 'mb' + i + 'bt' + vOgIni).className = 'mbButtonSel';
		}
	}
}
/*
 * @return {boolean} Retorna false ao terminar a execução
 */
function CadreOngletVoirOnglet() {
	var	vMbNom = this.id.substr( 0, 3 ),
		vIndex = this.id.substr( 5, 1 ),
		i;
	for ( i = 1; i <= 9; i++ ) {
		var vOgElem = document.getElementById( vMbNom + 'og' + i );
		if ( !vOgElem ) {
			break;
		}
		if ( vIndex == i ) {
			vOgElem.style.display = 'block';
			vOgElem.style.visibility = 'visible';
			document.getElementById(vMbNom + 'bt' + i).className = 'mbButtonSel';
		} else {
			vOgElem.style.display = 'none';
			vOgElem.style.visibility = 'hidden';
			document.getElementById(vMbNom + 'bt' + i).className = 'mbButton';
		}
	}
	return false;
}

/**
 * retour si ailleurs que sur l'espace utilisateur,
 * sachant que c'est une horreur au niveau de l'accessibilité
 * et qu'il est impossible de 'récupérer' ou de recycler ce script
 * (celui-ci fonctionnant par inclusion de sous pages)
 */
if ( $.inArray( mw.config.get( 'wgNamespaceNumber' ), [ 12, 102 ] ) === -1 ) {
	$( CadreOngletInit );
}