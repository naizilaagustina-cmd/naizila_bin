const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.video,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Sine: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Text: 0},
	{Touch: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Text2: 0},
	{Video: 0},
	{Video2: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{DragDrop: 0},
	{Text3: 0},
	{Sprite9: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{Platform: 0},
	{Sprite13: 0},
	{Solid: 0},
	{Sprite14: 0},
	{Sprite15: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	Video: class extends self.IWorldInstance {},
	Video2: class extends self.IWorldInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Text3: class extends self.ITextInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {}
}