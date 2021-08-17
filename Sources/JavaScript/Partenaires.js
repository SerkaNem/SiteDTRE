let i = 0, classeAttribuer = ['class1', 'class2'], 
nomPartenaire = ['Caliban', 'Caliban'],
descriptionPartenaire = [`
Caliban est une association visant à promouvoir l'électronique et la robotique. 
Ils organisent différents événements mais sont notammebnt connus pour leur Apérobot. 
Ils organisent évidemment bien d'autres événements.`, 
`
Caliban est une association visant à promouvoir l'électronique et la robotique. 
Ils organisent différents événements mais sont notammebnt connus pour leur Apérobot. 
Ils organisent évidemment bien d'autres événements.`], 
lienSitePartenaire = ['https://caliban-asso.fr/', 'https://caliban-asso.fr/'],
imagePath = [
'../../image/Partenaires/Caliban.png', '../../image/Partenaires/Robot.png'], 
ite = nomPartenaire.length - 1;

for (i = 0; i <= ite; i++) {
	console.log("Test");
	document.getElementById('page').innerHTML += `
		<div class = "sectionPage ${classeAttribuer[i % 2]}"">
			<h3>${nomPartenaire[i]}</h3>
			<div class="description">
				<img src="${imagePath[i]}" alt="${nomPartenaire[i]}" />
				<p>${descriptionPartenaire[i]}</p>
			</div>
			<p class="lienSite">
				Pour plus d'informations, nous vous invitons à aller voir leur site Internet
				en cliquant <a href = "${lienSitePartenaire[i]}">ici</a>  !
			</p>
		</div>
	`;
}

document.getElementById('footer').innerHTML = `
	<footer class="${classeAttribuer[i % 2]}">
		<a href="Accueil.html"><img src="../../image/Logo/Logo.png" alt="DTRE" /></a>
		<p>Nous contacter :</p>
		<p>Adresse mail : <br /><a href="mailto:dtre@et.esiea.fr" title="Nous envoyer un mail">dtre@et.esiea.fr</a></p>
		<a href="#"><img src="../../image/Réseaux Sociaux/Logo YouTube.jpg" alt="Chaîne YouTube" /></a>
		<a href="https://www.instagram.com/dtre_esiea/"><img src="../../image/Réseaux Sociaux/Logo Instagram.png" alt="Instagram" /></a>
		<a href="https://discord.gg/aQpkhjkGeV"><img src="../../image/Réseaux Sociaux/Logo Discord.png" alt="Discord"></a>
		<a href="https://twitter.com/assodtre"><img src="../../image/Réseaux Sociaux/Logo Twitter.png" alt="Twitter" /></a>
		<a href="Accueil.html"><img src="../../image/Logo/Logo.png" alt="DTRE" /></a>
	</footer>
`;