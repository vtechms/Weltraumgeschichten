namespace VisualNovel {
  export async function NeueSzene22(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.schiffbrücke);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.john,
      characters.john.pose.neutral,
      ƒS.positionPercent(80, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.john, "Ja, in den Kampf!");

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.natascha,
      characters.natascha.pose.angry,
      ƒS.positionPercent(25, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.natascha,
      "Ihr seid nicht die Hellsten, was?"
    );
    await ƒS.Speech.tell(
      characters.natascha,
      "Falls ihr es bemerkt habt, sind wir nur auf einem Handelsschiff."
    );
    await ƒS.Speech.tell(
      characters.john,
      "Mist, du hast Recht, tut mir leid Schnucki."
    );
    await ƒS.Speech.tell(
      characters.natascha,
      "Sehe ich aus wie dein Schnucki?"
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.luna,
      characters.luna.pose.smile,
      ƒS.positionPercent(50, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.luna, "Das bringt uns alles nicht weiter.");
    await ƒS.Speech.tell(
      characters.luna,
      "Das Stimmt! Wie brauchen ein Wunder."
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Hier spricht die Sternenflotte Misaki, fliegen sie zu unserer Position."
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Wir tauchen in wenigen Sekunden in ihrem D1 Sektor mit Verstärkung auf."
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.john,
      characters.john.pose.happy,
      ƒS.positionPercent(80, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.john,
      "Wir sind gerettet, das ist der Boss."
    );
    await ƒS.Speech.tell(
      characters.stev,
      "Habe ich das richtig verstanden? Die Misaki?"
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.stev,
      characters.stev.pose.neutral,
      ƒS.positionPercent(60, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.stev,
      "Es handelt sich hier um ein Schiff der Alphaklasse mit regulärem Geleitschutz von mindestens 100 Schiffen."
    );

    await ƒS.Character.hide(characters.natascha);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.natascha,
      characters.natascha.pose.happy,
      ƒS.positionPercent(25, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.natascha,
      "Absolut korrekt, da hat jemand seine Hausaufgaben gemacht."
    );
    await ƒS.Speech.tell(
      characters.stev,
      "Gut, dann steuer ich mal Richtung D1 und hoffe, dass die Schilde das aushalten."
    );

    await ƒS.Character.hide(characters.stev);
    await ƒS.Character.hide(characters.luna);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.sad,
      ƒS.positionPercent(50, 120)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.sofi,
      "Ich halte das für keine gute Idee, lass uns lieber ergeben."
    );

    await ƒS.Character.hide(characters.john);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.john,
      characters.john.pose.angry,
      ƒS.positionPercent(80, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.john, "Die IG ergibt sich nicht.");

    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.show(
      characters.stev,
      characters.stev.pose.neutral,
      ƒS.positionPercent(60, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.stev, "Alles klar, ab geht die Post.");

    await ƒS.Speech.tell(characters.chan, "Ihr wählt also den Tod, FEUER!");
    await ƒS.Speech.tell(characters.jin, "FEUER!");

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.luna,
      characters.luna.pose.smile,
      ƒS.positionPercent(50, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.luna,
      "Stev, die Schilde halten den Beschuss nicht aus."
    );
    await ƒS.Speech.tell(
      characters.luna,
      "Das unbekannte Schiff hat viel zu viel Feuerkraft."
    );

    await ƒS.Character.hide(characters.luna);
    await ƒS.Character.hide(characters.stev);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.sad,
      ƒS.positionPercent(50, 120)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.sofi, "Wir werden alle sterben!");

    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.show(
      characters.stev,
      characters.stev.pose.neutral,
      ƒS.positionPercent(60, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.stev, "Was soll ich tun?");
    await ƒS.Speech.tell(
      characters.player,
      "Dem Beschuss im Asteroidenfeld ausweichen."
    );
    await ƒS.Speech.tell(
      characters.stev,
      "Sehr gute Idee, sie treffen uns nicht mehr so häufig."
    );

    await ƒS.Speech.tell(
      characters.mei,
      "Sind in Sichtweite, eröffnen das Feuer!"
    );
    await ƒS.Speech.tell(
      characters.jin,
      "Capitain, dahinten ist gerade ein riesiges Schlachtschiff aufgetaucht, gefolgt von hunderten Jagtschiffen."
    );
    await ƒS.Speech.tell(characters.chan, "Sofort den Rückzug einleiten!");
    await ƒS.Speech.tell(characters.sun, "Sie laden die Laser!");
    await ƒS.Speech.tell(characters.chan, "Schneller!");
    await ƒS.Speech.tell(characters.mei, "FEUER!!!");

    await ƒS.Character.hide(characters.stev);
    await ƒS.Character.hide(characters.natascha);
    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.hide(characters.luna);
    await ƒS.Character.hide(characters.john);
    await ƒS.Character.hide(characters.john);
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
      "Ein Lichtstrahl hell wie die Sonne erleuchtet den dunklen, leeren Raum."
    );
    ƒS.Sound.play(sounds.ex, 1, false);
    await ƒS.Speech.tell(
      characters.narrator,
      "Gefolgt von einer unbeschreiblichen Explosion."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Mit diesem Laser hätte ein gesamter Planet ausgelöscht werden können."
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Hier spricht die Misaki, Feind wurde erfolgreich eliminiert."
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Wir werden ihr Schiff jetzt mit unserem Traktorstrahl auf unser Schiff ziehen."
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Bleiben sie alle auf ihrem Schiff, bis wir in Trojoko gelandet sind."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Die Misaki brachte alle wohlbehalten nach Trojoko. Auf einem Militärstützpunkt gelandet, werden alle Passagierin bis auf Stev, Laura und Luna in einen großen Raum gebracht."
    );

    await ƒS.Character.hide(characters.sprecher);
    await ƒS.update(1);

    ƒS.Sound.fade(sounds.space3, 0, 1, false);
    await ƒS.update(1);
  }
}
