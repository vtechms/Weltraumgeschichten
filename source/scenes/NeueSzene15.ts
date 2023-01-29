namespace VisualNovel {
  export async function NeueSzene15(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.space2, 1, true);
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.hschiff);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.stev,
      characters.stev.pose.neutral,
      ƒS.positionPercent(80, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.stev, "He dude, wach auf ...");

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.luna,
      characters.luna.pose.oh,
      ƒS.positionPercent(50, 100)
    );

    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.luna,
      "Lasst ihn doch erstmal wieder langsam zu Bewusstsein kommen."
    );

    await ƒS.Speech.tell(characters.luna, "Er sieht süß aus.");
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.laura,
      characters.laura.pose.sweat,
      ƒS.positionPercent(25, 100)
    );

    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.laura,
      "Du mal wieder, nicht alle Zuckerstücke sind für dich."
    );
    await ƒS.Speech.tell(characters.stev, "Ich glaub, er wacht langsam auf.");

    await ƒS.Speech.tell(characters.player, "Wo bin ich?");
    await ƒS.Character.hide(characters.laura);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.laura,
      characters.laura.pose.ee,
      ƒS.positionPercent(25, 100)
    );

    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.laura,
      "Du bist auf einem neutralen Handelskreuzer"
    );
    await ƒS.Speech.tell(
      characters.laura,
      "Wir sind gerade auf dem Weg Waren auf OmegaXV abzuholen."
    );
    await ƒS.Speech.tell(
      characters.laura,
      "Dort werden wir dich am IG Weltraum-Hafen absetzen."
    );

    await ƒS.Character.hide(characters.stev);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.stev,
      characters.stev.pose.smile,
      ƒS.positionPercent(80, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.stev,
      "Wir haben dich im Weltall aufgesammelt."
    );
    await ƒS.Speech.tell(
      characters.stev,
      "Unser System hat eine massive Explosion gemeldet."
    );
    await ƒS.Speech.tell(
      characters.stev,
      "Unser Radar hatte 3 Signale ausgemacht."
    );
    await ƒS.Character.hide(characters.stev);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.stev,
      characters.stev.pose.neutral,
      ƒS.positionPercent(80, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.stev,
      "Bei einem der 3 Signale haben wir dich gefunden."
    );
    await ƒS.Speech.tell(
      characters.stev,
      "Den anderen Zwei werden vermutlich andere Schiffe geholfen haben."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Du bist noch nicht bei Kräften und wirst wieder bewusstlos."
    );

    await ƒS.Character.hide(characters.stev);
    await ƒS.Character.hide(characters.laura);
    await ƒS.Character.hide(characters.luna);

    await ƒS.update(1);
  }
}
