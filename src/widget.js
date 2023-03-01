class Widget {
    constructor() {
        this.events = {};
        this.title = "";
        this.uwaUrl = "./";
        this.uwaPath = "";
        this.id = "standalone";
        this.data = {};
        this.setValue = (prefName, value) => {
            this.preferences[prefName].value = value;
            this.savePrefsLocalStorage();
        };
        this.events = {};
        this.title = "";
        this.preferences = this.loadPreferences();
    }
    loadPreferences() {
        let prefsLocalStr = localStorage.getItem("_prefs_4_Widget_");
        let prefsLocal;
        if (prefsLocalStr && prefsLocalStr !== "null") {
            try {
                prefsLocal = JSON.parse(prefsLocalStr);
            }
            catch (err) {
                prefsLocal = {};
                localStorage.setItem("_prefs_4_Widget_", JSON.stringify(prefsLocal));
            }
        }
        else {
            prefsLocal = {};
            localStorage.setItem("_prefs_4_Widget_", JSON.stringify(prefsLocal));
        }
        return prefsLocal;
    }
    savePrefsLocalStorage() {
        localStorage.setItem("_prefs_4_Widget_", JSON.stringify(this.preferences));
    }
    addEvent(event, callback) {
        this.events[event] = callback;
        if (event === "onLoad") {
            if (document.readyState === "loading") {
                window.addEventListener("DOMContentLoaded", callback);
            }
            else {
                callback();
            }
        }
    }
    addPreference(pref) {
        pref.value = pref.defaultValue;
        this.preferences[pref.name] = pref;
        this.savePrefsLocalStorage();
    }
    getPreference(prefName) {
        return this.preferences[prefName];
    }
    getValue(prefName) {
        return this.preferences[prefName]?.value;
    }
    setTitle(t) {
        this.title = t;
        window.document.title = this.title;
    }
    setIcon(icon) {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement("link");
            link.rel = "icon";
            document.getElementsByTagName("head")[0].appendChild(link);
        }
        link.href = icon;
    }
    dispatchEvent() {
    }
}

const { widget } = window;
export { widget }