function App() {
    try {
        return (
            <div className="min-h-screen" data-name="app">
                <Header />
                <main>
                    <Hero />
                    <PropertyList />
                    <Features />
                    <ContactForm />
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
