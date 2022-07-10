import mixpanel from "mixpanel-browser"

mixpanel.init("890c7868e3f1d5aa1d4b79cf238a07d0", {debug: true, ignore_dnt: true});

export const Mixpanel = {
    
    identify: (id) => {
        mixpanel.identify(id);
    },
    track: (name, props) => {
        mixpanel.track(name, props);
    },
    people: {
        set: (props) => {
            mixpanel.people.set(props);
        }
    },
    TYPES: {
        OPEN_PROFILE: "OPEN_PROFILE",
        FILTER_REST: "FILTER_REST",
        VIEW_REST:"VIEW_REST",
        ADD_REVIEW:"ADD_REVIEW",
        ADD_REST:"ADD_REST",
        GO_TO_MAIN: "GO_TO_MAIN"
    }
}