define([], function( ) { return  JSON.stringify(
{
	"localVersion": 1493614629190,
	"serverVersion": 1493614629190,
	"components": [
		{
			"Title": "viewmodel",
			"Require": {
				"name": "viewmodel",
				"proto": false,
				"path": "viewmodel"
			},
			"Markup": {
				"tag": "component-viewmodel"
			},
			"Params": {},
			"ContentTypeId": "0x010044953CC6D35CEF45B19CCF2AEC7E32780100AE6AAB5FC77750469531F47E7B19864A"
		},
		{
			"Title": "bln",
			"Require": {
				"name": "bln",
				"proto": false,
				"path": "bln"
			},
			"Markup": {
				"tag": "component-bln"
			},
			"Params": {},
			"Permalink": "https://spaforms365.com/docs/designer-model/"
		},
		{
			"Title": "task",
			"Require": {
				"name": "task",
				"proto": false,
				"path": "task"
			},
			"Markup": {
				"tag": "component-task"
			},
			"Params": {},
			"ContentTypeId": "0x010800FD9CDFA677428E4BA4AC8E71C06F504E"
		}
	],
	"columns": {
		"mwp_FormType": "<Field ID=\"{ac53b379-6156-4aa5-bc14-8fa6136be526}\" Type=\"Text\" Name=\"mwp_FormType\" Required=\"FALSE\" DisplayName=\"Form Type\" Description=\"Give SPA Form Name\" Group=\"Medline Web Portal\" SourceID=\"{cbfbae2b-8362-4201-ac65-6a64a7d1d411}\" StaticName=\"mwp_FormType\" AllowDeletion=\"TRUE\" Version=\"1\" Customization=\"\" ColName=\"nvarchar3\" RowOrdinal=\"0\"><Default>Generic SPA Form</Default></Field>",
		"mwp_FormID": "<Field ID=\"{3c53b379-6256-4ab5-bc14-8fa61360e526}\" Type=\"Text\" Name=\"mwp_FormID\" Required=\"FALSE\" DisplayName=\"Form ID\" Description=\"Unique Form Identificator\" Group=\"Medline Web Portal\" SourceID=\"{cbfbae2b-8362-4201-ac65-6a64a7d1d411}\" StaticName=\"mwp_FormID\" AllowDeletion=\"TRUE\" Version=\"1\" Customization=\"\" ColName=\"nvarchar4\" RowOrdinal=\"0\"><Default>0</Default></Field>",
		"mwp_FormState": "<Field ID=\"{2223b379-4a56-25b5-bc14-8f3c5360e526}\" Type=\"Text\" Name=\"mwp_FormState\" Required=\"FALSE\" DisplayName=\"Form State\" Description=\"Form State\" Group=\"Medline Web Portal\" SourceID=\"{cbfbae2b-8362-4201-ac65-6a64a7d1d411}\" StaticName=\"mwp_FormState\" AllowDeletion=\"TRUE\" Version=\"1\" Customization=\"\" ColName=\"nvarchar5\" RowOrdinal=\"0\"><Default>Draft</Default></Field>",
		"Title": "<Field ID=\"{fa564e0f-0c70-4ab9-b863-0177e6ddd247}\" Type=\"Text\" Name=\"Title\" DisplayName=\"Title\" Required=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Title\" FromBaseType=\"TRUE\" ColName=\"nvarchar1\" EnforceUniqueValues=\"FALSE\" Indexed=\"FALSE\" MaxLength=\"255\" Version=\"1\" RowOrdinal=\"0\"><Default>HELLO</Default></Field>",
		"RadioChoice": "<Field Type=\"Choice\" DisplayName=\"RadioChoice\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" Indexed=\"FALSE\" Format=\"RadioButtons\" FillInChoice=\"FALSE\" ID=\"{f6f24c0a-5410-4b59-9942-3b1aa48e143e}\" SourceID=\"{0979ca81-b0e9-4148-9109-78fa4c99d2b9}\" StaticName=\"RadioChoice\" Name=\"RadioChoice\" ColName=\"nvarchar7\" RowOrdinal=\"0\"><Default>Enter Choice #1</Default><CHOICES><CHOICE>Enter Choice #1</CHOICE><CHOICE>Enter Choice #2</CHOICE><CHOICE>Enter Choice #3</CHOICE></CHOICES></Field>"
	}
}
);});