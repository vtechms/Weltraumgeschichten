namespace VisualNovel {
  export async function NeueSzene16(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.krankenhaus);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    await ƒS.Character.show(
      characters.sprecher,
      characters.sprecher.pose.happy,
      ƒS.positionPercent(50, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.narrator,
      "Du kommst langsam wieder zu Bewusstsein."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Das Handelsschiff hat dich bei der Krankenstation abgeliefert."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Bei der Krankenstation wirst du von Natascha abgeholt."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Sie und John sind nach dem Zwischenfall sofort nach OmegaXV gefolgen."
    );
    await ƒS.Character.hide(characters.sprecher);
    await ƒS.Character.show(
      characters.natascha,
      characters.natascha.pose.happy,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.natascha, "Wie konnte das passieren?");
    await ƒS.Speech.tell(
      characters.player,
      "Es war eine Bombe am Tank angebracht."
    );

    await ƒS.Character.hide(characters.natascha);
    await ƒS.Character.show(
      characters.natascha,
      characters.natascha.pose.angry,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.john,
      characters.john.pose.neutral,
      ƒS.positionPercent(78, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.john,
      "Sabotage - muss ein Insider gewesen sein."
    );
    await ƒS.Speech.tell(
      characters.natascha,
      "Ja. Von diesem Flug wussten nur die Leute aus der Besprechung und Mei."
    );
    await ƒS.Speech.tell(
      characters.john,
      "Wenn du gerade von Mei sprichst, wir sollten sie nicht warten lassen."
    );
    await ƒS.Speech.tell(characters.player, "Ich hätte noch Fragen.");
    await ƒS.Speech.tell(
      characters.natascha,
      "Die restlichen Fragen klären wir in der Zentrale."
    );
    await ƒS.Speech.tell(
      characters.natascha,
      "Dort warten Mei, David und Sofi auf uns."
    );

    await ƒS.Character.hide(characters.natascha);
    await ƒS.Character.hide(characters.john);

    ƒS.Sound.fade(sounds.space2, 0, 1, false);
    await ƒS.update(1);
  }
}
