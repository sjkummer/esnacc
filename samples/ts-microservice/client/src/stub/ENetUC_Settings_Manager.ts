// [PrintTSCode]
// [PrintTSComments]
/*
 * ENetUC_Settings_Manager.ts
 * "UC-Server-Access-Protocol-Settings-Manager" ASN.1 stubs.
 * This file was generated by estos esnacc (V5.0.21, 17.10.2023)
 * based on Coral WinSnacc written by Deepak Gupta
 * NOTE: This is a machine generated file - editing not recommended
 */

// prettier-ignore
/* eslint-disable */
// [PrintTSImports]
import * as asn1ts from "@estos/asn1ts";
import * as ENetUC_Common from "./ENetUC_Common";
// [PrintTSRootTypes]
export const moduleName = "ENetUC_Settings_Manager";

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnSomeSettings {
	public constructor(that?: AsnSomeSettings) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnSomeSettings {
		return new AsnSomeSettings();
	}

	public static type = "AsnSomeSettings";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnSomeSettings",
			...params,
			value: [
				new asn1ts.Boolean({ name: "bEnabled", idBlock: { optionalID: 0 } }),
				new asn1ts.Utf8String({ name: "u8sUsername", idBlock: { optionalID: 1 } }),
				new asn1ts.Real({ name: "stTime", idBlock: { optionalID: 2 } })
			]
		});
	}

	public bEnabled?: boolean;
	public u8sUsername?: string;
	public stTime?: Date;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnGetSettingsArgument {
	public constructor(that?: AsnGetSettingsArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnGetSettingsArgument {
		return new AsnGetSettingsArgument();
	}

	public static type = "AsnGetSettingsArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnGetSettingsArgument",
			...params,
			value: [

			]
		});
	}

}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnSetSettingsResult {
	public constructor(that?: AsnSetSettingsResult) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnSetSettingsResult {
		return new AsnSetSettingsResult();
	}

	public static type = "AsnSetSettingsResult";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnSetSettingsResult",
			...params,
			value: [

			]
		});
	}

}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnGetSettingsResult {
	public constructor(that: AsnGetSettingsResult) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnGetSettingsResult {
		return new AsnGetSettingsResult({
			settings: AsnSomeSettings["initEmpty"].call(0)
		});
	}

	public static type = "AsnGetSettingsResult";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnGetSettingsResult",
			...params,
			value: [
				AsnSomeSettings.getASN1Schema({ name: "settings" })
			]
		});
	}

	public settings!: AsnSomeSettings;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnSetSettingsArgument {
	public constructor(that: AsnSetSettingsArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnSetSettingsArgument {
		return new AsnSetSettingsArgument({
			settings: AsnSomeSettings["initEmpty"].call(0)
		});
	}

	public static type = "AsnSetSettingsArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnSetSettingsArgument",
			...params,
			value: [
				AsnSomeSettings.getASN1Schema({ name: "settings" })
			]
		});
	}

	public settings!: AsnSomeSettings;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnSettingsChangedArgument {
	public constructor(that: AsnSettingsChangedArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnSettingsChangedArgument {
		return new AsnSettingsChangedArgument({
			settings: AsnSomeSettings["initEmpty"].call(0)
		});
	}

	public static type = "AsnSettingsChangedArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnSettingsChangedArgument",
			...params,
			value: [
				AsnSomeSettings.getASN1Schema({ name: "settings" })
			]
		});
	}

	public settings!: AsnSomeSettings;
}
