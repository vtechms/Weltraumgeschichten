namespace VisualNovel {
  export async function SceneEndPositive9(): ƒS.SceneReturn {
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.rebellenPC);
    await ƒS.update(
      transitions.wipeRightToLeft.duration,
      transitions.wipeRightToLeft.alpha,
      transitions.wipeRightToLeft.edge
    );

    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.h_r_smile,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.aiko, "Ich habe es geschafft.");
    await ƒS.Speech.tell(characters.player, "Dir geht es Gott sei Dank gut.");

    await ƒS.Character.hide(characters.aiko);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.h_talk,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.aiko,
      "Du siehst nicht unbedingt gut aus, sind sie weg?"
    );
    await ƒS.Speech.tell(
      characters.player,
      "Ja, ohne die Hilfe der Müllmonster hätten wir das nicht geschafft."
    );

    await ƒS.Character.hide(characters.aiko);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.h_smile,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.aiko, "Müllmonster?");
    await ƒS.Speech.tell(characters.player, "Das erzähle ich dir später.");

    await ƒS.Character.hide(characters.aiko);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.h_r_smile,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.aiko,
      "Du hast Eecht, ich muss das hier unbedingt Skarana zeigen."
    );

    await ƒS.Character.hide(characters.aiko);
    await ƒS.update(1);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sprecher,
      characters.sprecher.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.narrator,
      "Aiko hatte den Virus umprogrammiert, sodass Alice jetzt keine Infrastrukturen lahmlegte, sondern sich ausschließlich mit der Abschaltung der IG Fabriken befasste."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Aiko hatte zuvor an einer Verschlüsslung des Hauptnetzes gearbeitet, wodurch sie in der Lage war, eine Hintertür zum System offenzulassen."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Darüber konnten die Rebellen erfolgreich den Virus, den " +
        gameProgress.playername +
        " besorgt hatte, in das Netz einspielen."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Unter der Kontrolle von Alice sorgten die Rebellen dafür, dass die Fabriken sich selbst zerstörten."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Im ersten Moment brach Panik auf dem Planeten aus."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Die Bewohner fürchteten sich, ihren Luxus und Wohlstand zu verlieren."
    );

    await ƒS.update(1);

    // Visual novel has reached the positive end
  }
}
