namespace VisualNovel {
  export async function NeueSzene09(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.verlassen2);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    await ƒS.Speech.tell(characters.skasskas, "HALT STOP!!!");

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skasskas,
      characters.skasskas.pose.angry,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.skasskas, "Was macht ihr hier?");

    let choices = {
      a: "Was geht dich das an?",
      b: "Wir wollen nur in die nächste Zone.",
      c: "Was bist du denn für eine Kreatur? ",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a) {
      await ƒS.Speech.tell(
        characters.skasskas,
        "Ich bin eine der eingeborenen dieses Planeten und das ist eines der letzten echten Trojoko Gebiete auf diesem Planeten."
      );
    } else if (selectedChoice == choices.b) {
      await ƒS.Speech.tell(
        characters.skasskas,
        "Dann gehört ihr als zu IG - egal, das ist Trojoko Gebiet. Verlasst dieses Land. IG hat schon viel zu viel kaputt gemacht hier."
      );
    } else if (selectedChoice == choices.c) {
      await ƒS.Speech.tell(
        characters.skasskas,
        "Die „Kreatur“, die du meinst, ist eine der letzten stolzen Trojoko Eingeborenen, verlass dieses Land."
      );
    }

    await ƒS.Character.hide(characters.skasskas);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skasskas,
      characters.skasskas.pose.neutral,
      ƒS.positionPercent(30, 100)
    );
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skarana,
      characters.skarana.pose.neutral,
      ƒS.positionPercent(70, 100)
    );

    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.skarana,
      "Sei nicht so unfreundlich, du Grummelkopf."
    );
    await ƒS.Speech.tell(
      characters.skarana,
      "Entschuldigt meinen Begleiter, er ist manchmal etwas komisch zu Menschen."
    );

    await ƒS.Character.hide(characters.skasskas);
    await ƒS.update(1);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.talk,
      ƒS.positionPercent(30, 150)
    );

    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.aiko,
      "Wir müssen uns entschuldigen, wir sollten nicht hier sein."
    );
    await ƒS.Speech.tell(
      characters.skarana,
      "Ich habe gehört, ihr wollt in die IG Zone, dafür müsst ihr nur diesem Weg hier folgen."
    );

    await ƒS.Character.hide(characters.skarana);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skarana,
      characters.skarana.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.aiko,
      "Meinen sie die kaputte Straße da drüben?"
    );
    await ƒS.Speech.tell(
      characters.skarana,
      "Ja, das war einst ein wundervoller Ort für jede Spezies, jetzt kann man die Luft kaum noch atmen. Die anliegende Industriezone arbeitet mit Natur schädlichen Chemikalien, welche immer häufiger in den Boden gelangen."
    );
    await ƒS.Speech.tell(characters.aiko, "Die Luft ist schädlich?");
    await ƒS.Speech.tell(
      characters.skarana,
      "Normalerweise ja, aber aktuell sind die Fabriken durch den Virus ausgefallen."
    );
    await ƒS.Speech.tell(
      characters.skarana,
      "Seit dem Computervirus regeneriert sich diese Zone wieder."
    );

    await ƒS.Character.hide(characters.skarana);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skarana,
      characters.skarana.pose.neutral,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.player,
      "Vielen Dank für ihre Hilfe, wir müssen jetzt los."
    );
    await ƒS.Speech.tell(
      characters.aiko,
      "Wir müssen jetzt leider gehen, vielen Dank für die Wegbeschreibung."
    );

    await ƒS.Character.hide(characters.aiko);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.happy,
      ƒS.positionPercent(30, 150)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.skarana, "Kein Problem Aiko.");
    await ƒS.Speech.tell(characters.aiko, "Woher kennst du meinen Namen?");

    await ƒS.Character.hide(characters.aiko);
    await ƒS.Character.hide(characters.skarana);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sprecher,
      characters.sprecher.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.sprecher,
      "Doch Aiko bekam keine Antwort mehr, die 2 Eingeborenen waren bereits verschwundenen."
    );
    await ƒS.Speech.tell(
      characters.sprecher,
      "Aiko und " +
        gameProgress.playername +
        " folgten dem Weg, welchen ihnen die Eingeborenen gezeigt hatten."
    );
    await ƒS.Speech.tell(
      characters.sprecher,
      "Sie kamen nach einer Zeit am Rande der Zone an und trafen nicht viel später Lea und Sofi."
    );
    await ƒS.Speech.tell(
      characters.sprecher,
      "Sofi führte die Gruppe zu einem großen Gebäude mit Wachposten davor."
    );
    await ƒS.Speech.tell(
      characters.sprecher,
      "Sie gingen in den Eingangsbereich und meldeten sich an."
    );
    await ƒS.Speech.tell(
      characters.sprecher,
      "Kurz nach ihrer Anmeldung wurden sie von John in ein Labor gebracht."
    );

    await ƒS.Character.hide(characters.sprecher);

    ƒS.Sound.fade(sounds.Way_Ambience, 0, 1, false);
    await ƒS.update(1);
  }
}
