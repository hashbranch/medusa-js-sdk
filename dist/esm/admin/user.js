var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class User {
    /**
     * @ignore
     */
    constructor(client) {
        this.client = client;
    }
    create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/users`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/users/${id}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    list(queryParams, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/users`, {
                headers,
                query: queryParams,
            });
        });
    }
    retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/users/${id}`, {
                query,
                headers,
            });
        });
    }
    delete(id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/users/${id}`, {
                method: "DELETE",
                headers,
            });
        });
    }
    me(query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/users/me`, {
                query,
                headers,
            });
        });
    }
}
//# sourceMappingURL=user.js.map