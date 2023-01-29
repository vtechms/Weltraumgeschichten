namespace VisualNovel {
  export async function NeueSzene10(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.ig1, 0.5, true);
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.ig);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.john,
      characters.john.pose.happy,
      ƒS.positionPercent(78, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.john,
      "Schön, dass ihr alle hier erschienen seid."
    );

    await ƒS.Speech.tell(
      characters.john,
      "Für die, die es nicht wissen, mein Name ist John."
    );

    await ƒS.Character.hide(characters.john);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.john,
      characters.john.pose.neutral,
      ƒS.positionPercent(78, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.john,
      "Ich bin hier für die organisatorischen Dinge zuständig."
    );
    await ƒS.Speech.tell(
      characters.john,
      "Falls ihr etwas braucht, meldet euch bei mir."
    );
    await ƒS.Speech.tell(
      characters.john,
      "Der alte Sack da hinten im Eck ist Dr. Miller und ist zuständig für all unsere Forschungsprojekte."
    );
    await ƒS.Character.hide(characters.john);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.john,
      characters.john.pose.happy,
      ƒS.positionPercent(78, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.john,
      "Er ist über das Projekt hinweg euer und mein Boss."
    );

    await ƒS.Character.hide(characters.john);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.Dr_Millier,
      characters.Dr_Millier.pose.neutral,
      ƒS.positionPercent(78, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.Dr_Millier, "Schön, dass ihr hier seid.");
    await ƒS.Speech.tell(
      characters.Dr_Millier,
      "Über den alten Sack reden wir noch mal John."
    );

    await ƒS.Character.hide(characters.Dr_Millier);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.Dr_Millier,
      characters.Dr_Millier.pose.happy,
      ƒS.positionPercent(78, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.Dr_Millier,
      "Neben mir werden euch auch noch David und Natascha unter die Arme greifen."
    );

    await ƒS.Character.show(
      characters.natascha,
      characters.natascha.pose.happy,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.natascha, "Hallo zusammen.");

    await ƒS.Character.hide(characters.natascha);
    await ƒS.update(1);
    await ƒS.Character.show(
      characters.david,
      characters.david.pose.sad,
      ƒS.positionPercent(20, 100)
    );

    await ƒS.update(1);

    await ƒS.Speech.tell(characters.david, "Hi.");

    await ƒS.Speech.tell(
      characters.Dr_Millier,
      "Wir haben aber gar nicht so viel Zeit, uns jetzt alle vorzustellen."
    );
    await ƒS.Speech.tell(
      characters.Dr_Millier,
      gameProgress.playername +
        ", du bleibst bitte mit mir hier, der Rest geht mit John mit."
    );
    await ƒS.Character.hide(characters.david);
    await ƒS.Character.hide(characters.Dr_Millier);

    await ƒS.Character.show(
      characters.Dr_Millier,
      characters.Dr_Millier.pose.neutral,
      ƒS.positionPercent(78, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Dr_Millier, "Ich komme gleich zur Sache.");
    await ƒS.Speech.tell(
      characters.Dr_Millier,
      "Wir konnten heute bei einem weiteren Angriff des Virus auf unsere Chemiefabriken einen kleinen Teil des Virus fangen und auf einer externen Einheit einsperren."
    );
    await ƒS.Speech.tell(
      characters.Dr_Millier,
      "Es handelt sich hierbei um einen kleinen Teil der künstlichen Intelligenz, aus dem der Virus besteht."
    );
    await ƒS.Speech.tell(
      characters.Dr_Millier,
      "Sie ähnelt stark der KI, die dein Vater dir damals geschenkt hatte, als er noch für uns gearbeitet hatte. Sona war glaube ich der Name des Programms."
    );
    await ƒS.Speech.tell(
      characters.Dr_Millier,
      "Es besteht eine große Ähnlichkeit mit dem Projekt, welches du letztens eingereicht hast."
    );
    await ƒS.Speech.tell(
      characters.Dr_Millier,
      "Deine Aufgabe ist es jetzt, dich näher mit dieser KI zu befassen und uns mehr Informationen zu besorgen."
    );
    await ƒS.Speech.tell(
      characters.Dr_Millier,
      "Setz dich einfach hier an meinen Computer, jemand wie du wird schon wissen, was er tun muss."
    );
    await ƒS.Speech.tell(characters.Dr_Millier, "Ich komm später wieder.");

    await ƒS.Character.hide(characters.Dr_Millier);
    await ƒS.update(1);
  }
}
