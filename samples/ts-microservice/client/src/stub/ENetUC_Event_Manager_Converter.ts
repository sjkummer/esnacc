// [PrintTSConverterCode]
// [PrintTSConverterComments]
/*
 * ENetUC_Event_Manager_Converter.ts
 * "UC-Server-Access-Protocol-Event-Manager" ASN.1 stubs.
 * This file was generated by estos esnacc (V5.0.17, 19.09.2023)
 * based on Coral WinSnacc written by Deepak Gupta
 * NOTE: This is a machine generated file - editing not recommended
 */

// prettier-ignore
/* eslint-disable */

// [PrintTSConverterImports]
import { ConverterError, ConverterErrorType, ConverterErrors, TSConverter, IDecodeContext, IEncodeContext, INamedType } from "./TSConverterBase";
import * as ENetUC_Event_Manager from "./ENetUC_Event_Manager";
// [PrintTSImports]
import * as asn1ts from "@estos/asn1ts";
import * as ENetUC_Common from "./ENetUC_Common";
import * as ENetUC_Common_Converter from "./ENetUC_Common_Converter";
// [PrintTSRootTypes]
export const moduleName = "ENetUC_Event_Manager_Converter";

// [PrintTSEncoderDecoderCode]
export class AsnCreateFancyEventsArgument_Converter {
	public static toJSON(s: ENetUC_Event_Manager.AsnCreateFancyEventsArgument, errors?: ConverterErrors, context?: IEncodeContext, name?: string): ENetUC_Event_Manager.AsnCreateFancyEventsArgument & INamedType | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addEncodeContext(context, name, "AsnCreateFancyEventsArgument");

		const t = {} as ENetUC_Event_Manager.AsnCreateFancyEventsArgument & INamedType;

		// [Print_JSON_EncoderSeqDefCode]
		if (newContext.bAddTypes)
			t._type = "AsnCreateFancyEventsArgument";
		TSConverter.fillJSONParam(s, t, "iEventDelay", "number", errors, newContext);
		TSConverter.fillJSONParam(s, t, "iEventCount", "number", errors, newContext);

		if (errors.validateResult(errorCount, newContext, "AsnCreateFancyEventsArgument"))
			return t;

		return undefined;

	}

	public static fromJSON(data: string | object | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Event_Manager.AsnCreateFancyEventsArgument | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addDecodeContext(context, name, "AsnCreateFancyEventsArgument");

		let t: ENetUC_Event_Manager.AsnCreateFancyEventsArgument | undefined;
		const s = TSConverter.prepareJSONData<ENetUC_Event_Manager.AsnCreateFancyEventsArgument>(data, errors, newContext, optional);
		if (s !== undefined) {
			t = ENetUC_Event_Manager.AsnCreateFancyEventsArgument["initEmpty"].call(0);
			// [Print_JSON_DecoderSeqDefCode]
			TSConverter.fillJSONParam(s, t, "iEventDelay", "number", errors, context, false);
			TSConverter.fillJSONParam(s, t, "iEventCount", "number", errors, context, false);
		}
		if (errors.validateResult(errorCount, newContext, "AsnCreateFancyEventsArgument"))
			return t;

		return undefined;
	}

	public static toBER(s: ENetUC_Event_Manager.AsnCreateFancyEventsArgument | undefined, errors?: ConverterErrors, context?: IEncodeContext, name?: string, optional?: boolean | number): asn1ts.Sequence | undefined {
		name ||= "AsnCreateFancyEventsArgument";
		if (!s) {
			TSConverter.addMissingError(errors, context, name, optional);
			return undefined;
		}

		const result = new asn1ts.Sequence(TSConverter.getASN1TSConstructorParams(name, optional));
		const t = result.valueBlock.value;
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addEncodeContext(context, name, "AsnCreateFancyEventsArgument");

		// [Print_BER_EncoderSeqDefCode]
		TSConverter.validateParam(s, "iEventDelay", "number", errors, newContext);
		TSConverter.validateParam(s, "iEventCount", "number", errors, newContext);
		if (errors.validateResult(errorCount, newContext, "AsnCreateFancyEventsArgument")) {
			t.push(new asn1ts.Integer({ value: s.iEventDelay, name: "iEventDelay" }));
			t.push(new asn1ts.Integer({ value: s.iEventCount, name: "iEventCount" }));
			return result;
		}
		return undefined;
	}

	public static fromBER(data: Uint8Array | asn1ts.BaseBlock | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Event_Manager.AsnCreateFancyEventsArgument | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addDecodeContext(context, name, "AsnCreateFancyEventsArgument");

		let t: ENetUC_Event_Manager.AsnCreateFancyEventsArgument | undefined;
		const s = TSConverter.prepareASN1BERData(ENetUC_Event_Manager.AsnCreateFancyEventsArgument.getASN1Schema, data, errors, newContext, optional);
		if (asn1ts.Sequence.typeGuard(s)) {
			t = ENetUC_Event_Manager.AsnCreateFancyEventsArgument["initEmpty"].call(0);
			// [Print_BER_DecoderSeqDefCode]
			TSConverter.fillASN1Param(s, t, "iEventDelay", "Integer", errors, newContext);
			TSConverter.fillASN1Param(s, t, "iEventCount", "Integer", errors, newContext);
		}

		if (errors.validateResult(errorCount, newContext, "AsnCreateFancyEventsArgument"))
			return t;

		return undefined;
	}
}

// [PrintTSEncoderDecoderCode]
export class AsnCreateFancyEventsResult_Converter {
	public static toJSON(s: ENetUC_Event_Manager.AsnCreateFancyEventsResult, errors?: ConverterErrors, context?: IEncodeContext, name?: string): ENetUC_Event_Manager.AsnCreateFancyEventsResult & INamedType | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addEncodeContext(context, name, "AsnCreateFancyEventsResult");

		const t = {} as ENetUC_Event_Manager.AsnCreateFancyEventsResult & INamedType;

		// [Print_JSON_EncoderSeqDefCode]
		if (newContext.bAddTypes)
			t._type = "AsnCreateFancyEventsResult";

		if (errors.validateResult(errorCount, newContext, "AsnCreateFancyEventsResult"))
			return t;

		return undefined;

	}

	public static fromJSON(data: string | object | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Event_Manager.AsnCreateFancyEventsResult | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addDecodeContext(context, name, "AsnCreateFancyEventsResult");

		let t: ENetUC_Event_Manager.AsnCreateFancyEventsResult | undefined;
		const s = TSConverter.prepareJSONData<ENetUC_Event_Manager.AsnCreateFancyEventsResult>(data, errors, newContext, optional);
		if (s !== undefined) {
			t = ENetUC_Event_Manager.AsnCreateFancyEventsResult["initEmpty"].call(0);
			// [Print_JSON_DecoderSeqDefCode]
		}
		if (errors.validateResult(errorCount, newContext, "AsnCreateFancyEventsResult"))
			return t;

		return undefined;
	}

	public static toBER(s: ENetUC_Event_Manager.AsnCreateFancyEventsResult | undefined, errors?: ConverterErrors, context?: IEncodeContext, name?: string, optional?: boolean | number): asn1ts.Sequence | undefined {
		name ||= "AsnCreateFancyEventsResult";
		if (!s) {
			TSConverter.addMissingError(errors, context, name, optional);
			return undefined;
		}

		const result = new asn1ts.Sequence(TSConverter.getASN1TSConstructorParams(name, optional));
		const t = result.valueBlock.value;
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addEncodeContext(context, name, "AsnCreateFancyEventsResult");

		// [Print_BER_EncoderSeqDefCode]

		return result;
		return undefined;
	}

	public static fromBER(data: Uint8Array | asn1ts.BaseBlock | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Event_Manager.AsnCreateFancyEventsResult | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addDecodeContext(context, name, "AsnCreateFancyEventsResult");

		let t: ENetUC_Event_Manager.AsnCreateFancyEventsResult | undefined;
		const s = TSConverter.prepareASN1BERData(ENetUC_Event_Manager.AsnCreateFancyEventsResult.getASN1Schema, data, errors, newContext, optional);
		if (asn1ts.Sequence.typeGuard(s)) {
			t = ENetUC_Event_Manager.AsnCreateFancyEventsResult["initEmpty"].call(0);
			// [Print_BER_DecoderSeqDefCode]
		}

		if (errors.validateResult(errorCount, newContext, "AsnCreateFancyEventsResult"))
			return t;

		return undefined;
	}
}

// [PrintTSEncoderDecoderCode]
export class AsnFancyEventArgument_Converter {
	public static toJSON(s: ENetUC_Event_Manager.AsnFancyEventArgument, errors?: ConverterErrors, context?: IEncodeContext, name?: string): ENetUC_Event_Manager.AsnFancyEventArgument & INamedType | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addEncodeContext(context, name, "AsnFancyEventArgument");

		const t = {} as ENetUC_Event_Manager.AsnFancyEventArgument & INamedType;

		// [Print_JSON_EncoderSeqDefCode]
		if (newContext.bAddTypes)
			t._type = "AsnFancyEventArgument";
		TSConverter.fillJSONParam(s, t, "iEventCounter", "number", errors, newContext);
		TSConverter.fillJSONParam(s, t, "iEventsLeft", "number", errors, newContext);

		if (errors.validateResult(errorCount, newContext, "AsnFancyEventArgument"))
			return t;

		return undefined;

	}

	public static fromJSON(data: string | object | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Event_Manager.AsnFancyEventArgument | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addDecodeContext(context, name, "AsnFancyEventArgument");

		let t: ENetUC_Event_Manager.AsnFancyEventArgument | undefined;
		const s = TSConverter.prepareJSONData<ENetUC_Event_Manager.AsnFancyEventArgument>(data, errors, newContext, optional);
		if (s !== undefined) {
			t = ENetUC_Event_Manager.AsnFancyEventArgument["initEmpty"].call(0);
			// [Print_JSON_DecoderSeqDefCode]
			TSConverter.fillJSONParam(s, t, "iEventCounter", "number", errors, context, false);
			TSConverter.fillJSONParam(s, t, "iEventsLeft", "number", errors, context, false);
		}
		if (errors.validateResult(errorCount, newContext, "AsnFancyEventArgument"))
			return t;

		return undefined;
	}

	public static toBER(s: ENetUC_Event_Manager.AsnFancyEventArgument | undefined, errors?: ConverterErrors, context?: IEncodeContext, name?: string, optional?: boolean | number): asn1ts.Sequence | undefined {
		name ||= "AsnFancyEventArgument";
		if (!s) {
			TSConverter.addMissingError(errors, context, name, optional);
			return undefined;
		}

		const result = new asn1ts.Sequence(TSConverter.getASN1TSConstructorParams(name, optional));
		const t = result.valueBlock.value;
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addEncodeContext(context, name, "AsnFancyEventArgument");

		// [Print_BER_EncoderSeqDefCode]
		TSConverter.validateParam(s, "iEventCounter", "number", errors, newContext);
		TSConverter.validateParam(s, "iEventsLeft", "number", errors, newContext);
		if (errors.validateResult(errorCount, newContext, "AsnFancyEventArgument")) {
			t.push(new asn1ts.Integer({ value: s.iEventCounter, name: "iEventCounter" }));
			t.push(new asn1ts.Integer({ value: s.iEventsLeft, name: "iEventsLeft" }));
			return result;
		}
		return undefined;
	}

	public static fromBER(data: Uint8Array | asn1ts.BaseBlock | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Event_Manager.AsnFancyEventArgument | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addDecodeContext(context, name, "AsnFancyEventArgument");

		let t: ENetUC_Event_Manager.AsnFancyEventArgument | undefined;
		const s = TSConverter.prepareASN1BERData(ENetUC_Event_Manager.AsnFancyEventArgument.getASN1Schema, data, errors, newContext, optional);
		if (asn1ts.Sequence.typeGuard(s)) {
			t = ENetUC_Event_Manager.AsnFancyEventArgument["initEmpty"].call(0);
			// [Print_BER_DecoderSeqDefCode]
			TSConverter.fillASN1Param(s, t, "iEventCounter", "Integer", errors, newContext);
			TSConverter.fillASN1Param(s, t, "iEventsLeft", "Integer", errors, newContext);
		}

		if (errors.validateResult(errorCount, newContext, "AsnFancyEventArgument"))
			return t;

		return undefined;
	}
}
