"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrl = void 0;
const getUrl = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let res = yield fetch(`${process.env.NEXTJS_BACKEND_URL}/api/geturl`, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                deploymentId: id
            })
        });
        if (res.status === 200) {
            let data = yield res.json();
            console.log(data);
            return data.repoUrl;
        }
    }
    catch (error) {
        console.log("error", error);
    }
});
exports.getUrl = getUrl;
