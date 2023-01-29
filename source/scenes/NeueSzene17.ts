namespace VisualNovel {
  export async function NeueSzene17(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.ig2, 0.2, true);
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.omegaXV);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    await ƒS.Speech.tell(
      characters.narrator,
      "Die Zentrale der IG auf OmegaXV liegt genau im Zentrum der IG Fabrikstadt."
    );

    await ƒS.Speech.tell(
      characters.narrator,
      "Natascha und John bringen " + gameProgress.playername + " in ein Büro."
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.smile,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mei,
      "Sehr schön, jetzt wo alle hier sind, würde ich mich kurz vorstellen."
    );

    await ƒS.Character.hide(characters.mei);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.surprised,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mei,
      "Mein Name ist Mei und ich bin die Anführerin der IG."
    );

    await ƒS.Character.hide(characters.mei);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.smile,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.mei,
      "Es ist sehr bedauerlich, dass wir unter solchen Umständen zusammenkommen müssen."
    );
    await ƒS.Character.hide(characters.mei);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.sad,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.mei, "Daher mach ich es kurz.");
    await ƒS.Character.hide(characters.mei);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.angry,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.mei,
      "John, Natascha - nehmen sie David fest."
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Er steht unter dem Verdacht, die Bombe auf das Schiff gebracht zu haben."
    );

    // Animates character
    await ƒS.Character.animate(
      characters.mei,
      characters.mei.pose.angry,
      middleToLeft(70, 110, 20, 110)
    );

    await ƒS.Character.show(
      characters.john,
      characters.john.pose.neutral,
      ƒS.positionPercent(78, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.john,
      "Du Drecksau, ich hab dich meiner Frau und den Kindern vorgestellt."
    );
    await ƒS.Character.hide(characters.john);

    await ƒS.Character.animate(
      characters.mei,
      characters.mei.pose.angry,
      leftToRight(20, 110, 70, 110)
    );

    await ƒS.Character.show(
      characters.david,
      characters.david.pose.angry,
      ƒS.positionPercent(25, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.david, "Ich bin unschuldig!");
    await ƒS.Character.hide(characters.mei);
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.sad,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.mei,
      "Klar, die Pilotin hat sich selbst in die Luft gesprengt."
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Oder willst du mir sagen, die Kinder waren es?"
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Deine Fluchtkapsel war die erste, die das Schiff verlassen hat."
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Bringt ihn weg! Ich möchte ihn nicht mehr sehen."
    );

    await ƒS.Speech.tell(characters.natascha, "Wie sie befehlen!");
    await ƒS.Speech.tell(characters.david, "Ihr seid nicht besser als wir!!!");
    await ƒS.Speech.tell(
      characters.david,
      "Es ist zu spät! Der Virus ist bereits im System."
    );
    await ƒS.Speech.tell(
      characters.john,
      "Die Sau lädt gerade etwas ins System, zieht den USB-Stick aus dem RECHNER!!"
    );
    await ƒS.Speech.tell(
      characters.david,
      "Viel zu spät, der Virus ist bereits im System und braucht nur noch einen kurzen Moment, bis er sich entfaltet."
    );
    await ƒS.Character.hide(characters.david);
    await ƒS.Character.hide(characters.sprecher);

    await ƒS.Speech.tell(
      characters.mei,
      "Sofi," + gameProgress.playername + ", unternehmt etwas!!!"
    );

    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.sad,
      ƒS.positionPercent(20, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.sofi, "Ich weiß nicht, was.");

    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.hide(characters.mei);

    await ƒS.update(1);
  }
}
