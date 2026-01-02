import "../styles/settings_page.css"
import Header_part from "../components/Header_part"
// TODO: Implementatio for settings page will be when backend is ready

export default function Settings_page() {

    return (
        <>
            <div className="settings-body">
                <Header_part />

                <div className="blacklist-tags">
                    <h3>Blacklist Tag/s</h3>
                </div>
            </div>
        </>
    )
}