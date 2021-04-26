from flask import Flask, request, render_template_string
app = Flask(__name__)

@app.route('/')
def index():
    temp = '''
        <h1>Site Under Construction</h1>
        <p>Made in Flask/Jinja2</p>
        <a href="./search?q=hoge">search page is here</a>
    '''
    return render_template_string(temp)


@app.route('/search')
def search():
    q = request.args.get('q') or ""
    temp = '''
        <p>search result</p>
        {}
    '''.format(q)
    return render_template_string(temp)


if __name__ == "__main__":
    app.run(host='0.0.0.0')
