export const hostsSelector = state => state.hosts;

export const hostSelector = (hostName, state) => {
    const hosts = hostsSelector(state);
    let hostSelected;
    for (let host of Object.keys(hosts)) {
        if(host === hostName) {
            hostSelected = hosts[hostName];
        }
    }
    return hostSelected;
};